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

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then((connection)=>{
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.get('/', (req, res) => {
            res.send('hola mundo')
        })

        api.get('/search', (req, res) => {
            const q = req.query.q

            res.send(`you requested me to search: ${q}`)
        })

        api.post('/users', jsonBodyParser, (req, res) =>{
            const { name, email, password } = req.body

            try {
                registerUser(name, email, password)
                .then(() => {res.status(201).send()})
                .catch((error) => res.status(400).json({error: error.message}) )
            } catch (error) {
                res.status(400).json({error: error.message}) 
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) =>{
            const { email, password } = req.body

            try {
                authenticateUser(email, password)
                .then((userId) => {
                    res.status(202).json(userId)})
                .catch((error) => res.status(400).json({error: error.message}) )
            } catch (error) {
                res.status(400).json({error: error.message}) 
            }

        } )

        api.get('/users', (req, res) => {
            try{
            const { authorization } = req.headers
            const userId = authorization.slice(7)

                retrieveUser(userId)
                .then((user) => {
                    res.status(200).json(user)
                })
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
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

    api.patch('/posts/:postId', jsonBodyParser, (req, ser) => {
        try {
            const { authorization } = req.headers
            const userId = authorization.slice(7)

            const { postId } = req.params

            const { image, text } = req.body

            updatePost(userId, postId, image, text)
                .then(() => res.status(204).send())
                .catch(error => res.status(400).json({error: error.message}))
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    })

    api.delete('/posts/:postId', (req, res) => {
        try {
            const { authorization } = req.headers
            const userId = authorization.slice(7)

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
            const userId = authorization.slice(7)

            const { postId } = req.params

            retrievePost(userId, postId)
                    .then(post => res.json(post))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
  

    api.listen(9000, () => console.log('API running in port 9000'))
})