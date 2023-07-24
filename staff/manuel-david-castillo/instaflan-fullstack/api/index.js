require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const {authenticateUser, registerUser} = require('./logic/index')

const {MONGODB_URL, PORT, JWT_SECRET} = process.env

mongoose.connect(`${MONGODB_URL}/instaflan-data`)
    .then(() => {

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const {email, password} = req.body 

                authenticateUser(email, password)
                .then((userId) => {
                    const data = {sub: userId}

                    const token = jwt.sign(data, JWT_SECRET)

                    res.json(token)
                })
                .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const {name, email, password} = req.body

                registerUser(name, email, password)
                .then(()=> {res.status(201).send()})
                .catch((error) => res.status(400).json({error: error.message}))
            }
            catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.listen(PORT, () => console.log('Servidor lanzado en puerto 8000'))
    })