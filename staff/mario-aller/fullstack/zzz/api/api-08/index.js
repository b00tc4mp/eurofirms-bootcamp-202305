const mongodb = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const context = require('./logic/context')

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
const api = express()
const jsonBodyParser = bodyParser.json()

client.connect()
    .then(connection => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        // TBD later stage
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
                        const token = jwt.sign({ sub: userId }, 'asdfg hola')
                        res.json(token)
                    })
                    .catch(err => res.status(400).json({ error: err.message, }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // retrieveUser
        api.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'asdfg hola').sub

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // createPost
        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'asdfg hola').sub

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
                const userId = jwt.verify(token, 'asdfg hola').sub
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
                const userId = jwt.verify(token, 'asdfg hola').sub
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
                const userId = jwt.verify(token, 'asdfg hola').sub

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        // deletePost
        api.delete('/posts/:postId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, 'asdfg hola').sub
                const { postId } = req.params

                deletePost(userId, postId)
                    .then(() => res.send())
                    .catch(err => res.status(400).json({ error: err.message }))
            } catch (err) { res.status(400).json({ error: err.message }) }
        })

        api.listen(9000, () => console.log('API funcionando en 9000...'))
    })
