require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const context = require('./logic/context')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const retrievePosts = require('./logic/retrievePosts')
const updatePost = require('./logic/updatePost')
const deletePost = require('./logic/deletePost')
const retrievePost = require('./logic/retrievePost')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const { MongoClient } = mongodb

const client = new MongoClient(process.env.MONGODB_URL)

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.get('/', (req, res) => {
            res.send('hola mundo :)')
        })

        api.get('/search', (req, res) => {
            const q = req.query.q

            res.send(`you requested me to search: ${q}`)
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body

                registerUser(name, email, password)
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

                        const token = jwt.sign(data, process.env.JWT_SECRET)

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

                const data = jwt.verify(token, process.env.JWT_SECRET)

                //const { sub: userId } = data
                const userId = data.sub

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, process.env.JWT_SECRET)

                const userId = data.sub

                const { image, text } = req.body

                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, process.env.JWT_SECRET)

                const userId = data.sub

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, process.env.JWT_SECRET)

                const userId = data.sub

                const { postId } = req.params

                const { image, text } = req.body

                updatePost(userId, postId, image, text)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, process.env.JWT_SECRET)

                const userId = data.sub

                const { postId } = req.params

                deletePost(userId, postId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, process.env.JWT_SECRET)

                const userId = data.sub

                const { postId } = req.params

                retrievePost(userId, postId)
                    .then(post => res.json(post))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.put('/posts/:postId/favs', (req, res) => {
            // TODO implement me
        })

        api.listen(process.env.PORT, () => console.log(`API running in port ${process.env.PORT}`))
    })