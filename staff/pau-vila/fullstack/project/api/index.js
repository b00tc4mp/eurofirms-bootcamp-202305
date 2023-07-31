require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {
registerUser, 
authenticateUser, 
retrieveUser, 
createArtwork, 
createWorkshop,
updateArtwork, 
updateWorkshop, 
deleteArtwork, 
deleteWorkshop,
retrieveArtwork,
retrieveWorkshop, 
retrieveArtworks,
retrieveWorkshops, 
toggleFavWork 
} = require('./logic')

const cors = require('cors')
const jwt = require('jsonwebtoken')

const { PORT, MONGODB_URL, JWT_SECRET } = process.env

mongoose.connect(`${MONGODB_URL}/data`)
    .then(() => {
        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())
       
        api.get('/', (req, res) => {
            res.send('hola mundo ;)')
        })

        api.get('/', (req, res) => {
            const q = req.query.q

            res.send(`you requested me to search: ${q}`)
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            const { name, email, password, date, zip, phone } = req.body

            try {
                registerUser(name, email, password, date, zip, phone)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            const { email, password } = req.body

            try {
                authenticateUser(email, password)
                    .then(userId => {
                        const data = { sub: userId }

                        const token = jwt.sign(data, JWT_SECRET)

                        res.json(token)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })


        api.listen(PORT, () => console.log(`API running in port ${PORT}`))

    })