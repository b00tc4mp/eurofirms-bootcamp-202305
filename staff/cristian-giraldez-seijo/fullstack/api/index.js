/* This code is setting up an API using Express.js. It includes routes for user registration, user
authentication, retrieving user information, creating posts, updating posts, retrieving posts, and
deleting posts. It also uses MongoDB as the database and JWT for user authentication. The API
listens on port 9000. */
const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const context = require('./logic/context')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const updatePost = require('./logic/updatePost')
const retrievePost = require('./logic/retrievePost')
const retrievePosts = require('./logic/retrievePosts')
const deletePost = require('./logic/deletePost')

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
        api.use(cors())

        api.get('/', (req, res) => {
            res.send('hola mundo :)')
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body
                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                authenticateUser(email, password)
                    .then(userId => {
                        const data = { sub: userId }
                        const token = jwt.sign(data, 'pau13 no seas grosera')
                        res.json(token)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'pau13 no seas grosera').sub
                retrieveUser(userId)
                    .then(user => res.status(200).json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'pau13 no seas grosera').sub
                const { image, text } = req.body
                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.get('/posts', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'pau13 no seas grosera').sub

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'pau13 no seas grosera').sub

                const { image, text } = req.body
                const { postId } = req.params
                updatePost(userId, postId, image, text)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'pau13 no seas grosera').sub

                const { postId } = req.params
                deletePost(userId, postId)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.get('/posts/:postId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'pau13 no seas grosera').sub

                const { postId } = req.params
                retrievePost(userId, postId)
                    .then((post) => res.json(post))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })
        api.listen(9000, () => console.log('API runing in port 9000'))
    })