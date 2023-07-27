require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const {
    authenticateUser,
    createPost,
    deletePost,
    registerUser,
    retrievePost,
    retrievePosts,
    retrieveUser,
    toggleFavPost,
    updatePost
} = require('./logic')

const api = express()
const jsonBodyParser = bodyParser.json()
const { PORT, JWT_SECRET, MONGOOSE_URL } = process.env

mongoose.connect(MONGOOSE_URL)
    .then(() => {

        // TBD at later stage
        api.use(cors())

        // Conexion con el servidor
        api.get('/', (request, response) => {
            response.send('Ping: hi, everyone!')
        })

        // registerUser
        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body

                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // authenticateUser
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                return authenticateUser(email, password)
                    .then((userId) => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET)
                        res.json(token)
                    })
                    .catch(err => res.status(400).json({ error: err.message, }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // retrieveUser
        api.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // createPost
        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                const { image, text } = req.body

                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(err => res.status(400).json({ error: err.message, }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // updatePost
        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { postId } = req.params
                const { image, text } = req.body

                updatePost(userId, postId, image, text)
                    .then(() => res.status(204).send())
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })


        // retrievePost
        api.get('/posts/:postId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { postId } = req.params

                retrievePost(userId, postId)
                    .then(post => res.json(post))
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // retrievePosts
        api.get('/posts', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // deletePost
        api.delete('/posts/:postId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { postId } = req.params

                deletePost(userId, postId)
                    .then(() => res.send())
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // toggle Fav Post
        api.put('/posts/:postId/fav', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { postId } = req.params

                toggleFavPost(userId, postId)
                    .then(() => res.status(204).send())
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        api.listen(PORT, () => console.log('API funcionando en 9000...'))
    })
