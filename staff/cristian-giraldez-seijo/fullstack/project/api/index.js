require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    createStory,
    updateStory,
} = require('./logic')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const { PORT, MONGODB_URL, JWT_SECRET } = process.env

mongoose.connect(`${MONGODB_URL}/data`)
    .then(() => {
        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { nickname, email, password } = req.body

                registerUser(nickname, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

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

        api.post('/stories', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { title, sumary, text, shortcut, question, origin } = req.body
                createStory(userId, title, sumary, text, question, shortcut, origin)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/stories/:storyId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { storyId } = req.params
                const { title, sumary, text, shortcut, question, origin } = req.body
                updateStory(userId, storyId, title, sumary, text, question, shortcut, origin)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(PORT, () => console.log(`API running in port ${PORT}`))
    })