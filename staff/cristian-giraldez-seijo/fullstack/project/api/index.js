require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {
    registerUser,
    authenticateUser
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

        api.listen(PORT, () => console.log(`API running in port ${PORT}`))
    })