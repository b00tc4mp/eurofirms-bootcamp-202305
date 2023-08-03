// Enviroment
require('dotenv').config()
const {
    API_PORT,
    JWT_SECRET,
    MONGOOSE_URL
} = process.env

// Modules
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// User-defined modules
const {
    Dimension,
    Dimension2D,
    Block,
    Panel,
    sleep, display
} = require('./logic')

const api = express()
const jsonBodyParser = bodyParser.json()

mongoose.connect(MONGOOSE_URL)
    .then(() => {
        api.use(cors())

        // updatePost
        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { postId } = req.params
                const { image, text } = req.body

                updatePost(userId, postId, image, text)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.listen(API_PORT, () => console.log('API funcionando en 9000...'))
    })

