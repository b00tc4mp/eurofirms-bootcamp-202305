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

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        const api = express()

        const jsonBodyParser = bodyParser.json()

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
                    .then(userId => res.json(userId))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            try {
                // inside headers:
                // headers = {
                //     authorization: 'Bearer 64a7e52467f817075b908a21',
                //     'User-Agent': 'insomnia/2023.4.0'
                //      ...
                // }

                // const authorization = req.headers.authorization
                const { authorization } = req.headers
                const userId = authorization.slice(7)

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
                const userId = authorization.slice(7)

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
                const userId = authorization.slice(7)

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        // DONE updatePost (PATCH /posts/:postId)

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const userId = authorization.slice(7)

                //const postId = req.params.postId
                const { postId } = req.params

                const { image, text } = req.body

                updatePost(userId, postId, image, text)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        // TODO deletePost (DELETE /posts/:postId)
        // TODO retrievePost (GET /posts/:postId)

        api.listen(9000, () => console.log('API running in port 9000'))
    })