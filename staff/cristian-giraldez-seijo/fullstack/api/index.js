const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
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
        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, mail, password } = req.body
                registerUser(name, mail, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message, type: 'asynch' }))
            } catch (error) { res.status(400).json({ error: error.message, type: 'synch' }) }
        })
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                authenticateUser(email, password)
                    .then(userId => res.json(userId))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.get('/users/:userId', (req, res) => {
            try {
                const { userId } = req.params
                retrieveUser(userId)
                    .then(user => req.status(200).json(user))
                    .catch(error => res.status(400).json({ error: error.message, type: 'asynch' }))
            } catch (error) { res.status(400).json({ error: error.message, type: 'synch' }) }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const userId = req.headers.authorization.slice(7)
                const { image, text } = req.body
                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message, type: 'asynch' }))
            } catch (error) { res.status(400).json({ error: error.message, type: 'synch' }) }
        })

        api.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers
                const userId = authorization.slice(7)

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })
    })