const mongodb = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const context = require('./logic/context')


const registerUser = require('./logic/registerUser')
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
                    .catch(err => res.status(400).json({ error: err.message, type: 'Asynch' }))
            } catch (err) { res.status(400).json({ error: err.message, type: 'Synch' }) }
        })

        // retrieveUser
        api.get('/users/:userId', (req, res) => {
            try {
                const {userId} = req.params

                retrieveUser(userId)
                    .then(user => res.status(200).json(user))
                    .catch(err => res.status(400).json({ error: err.message, type: 'Asynch' }))
            } catch (err) { res.status(400).json({ error: err.message, type: 'Synch' }) }
        })

        // createPost
        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { text, image } = req.body

                createPost(userId, text, image)
                    .then(() => res.status(201).send())
                    .catch(err => res.status(400).json({ error: err.message, type: 'Asynch' }))
            } catch (err) { res.status(400).json({ error: err.message, type: 'Synch' }) }
        })

        // updatePost
        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { postId } = req.params
                const { text, image } = req.body

                updatePost(userId, postId, text, image)
                    .then(() => res.status(200).send())
                    .catch(err => res.status(400).json({ error: err.message, type: 'Asynch' }))
            } catch (err) { res.status(400).json({ error: err.message, type: 'Synch' }) }
        })


        // retrievePost
        api.get('/posts/id/:postId', (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { postId } = req.params

                retrievePost(userId, postId)
                    .then(post => res.status(200).json(post))
                    .catch(err => res.status(400).json({ error: err.message, type: 'Asynch' }))
            } catch (err) { res.status(400).json({ error: err.message, type: 'Synch' }) }
        })

        // retrievePosts
        api.get('/posts', (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)

                retrievePosts(userId)
                    .then(posts => res.status(200).json(posts))
                    .catch(err => res.status(400).json({ error: err.message, type: 'Asynch' }))
            } catch (err) { res.status(400).json({ error: err.message, type: 'Synch' }) }
        })

        // deletePost
        api.delete('/posts/:postId', (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { postId } = req.params

                deletePost(userId, postId)
                    .then(() => res.send())
                    .catch(err => res.status(400).json({ error: err.message, type: 'Asynch' }))
            } catch (err) { res.status(400).json({ error: err.message, type: 'Synch' }) }
        })

        api.listen(9000, () => console.log('API funcionando...'))
    })
