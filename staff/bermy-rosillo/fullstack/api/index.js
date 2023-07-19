const express = require('express')
const mongodb = require('mongodb')
const context = require('./logic/context')
const bodyParser = require('body-parser')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const updatePost = require('./logic/updatePost')
const retrievePosts = require('./logic/retrievePosts')
const retrievePost = require('./logic/retrievePost')
const deletePost = require('./logic/deletePost')
const cors = require('cors')
const jwt = require('jsonwebtoken')



const { MongoClient } = mongodb

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then((connection) => {
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        //manejador de respuestas
        api.get('/', (req, res) => {
            res.send('hola mundo')
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            const { name, email, password } = req.body

            try {
                registerUser(name, email, password)
                    .then(() => { res.status(201).send() })
                    .catch((error) => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        //--------------------
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            const { email, password } = req.body //peticion por medio de insomia

            try {
                authenticateUser(email, password)
                    .then(userId => {
                        //se crea un obj y se guarda el id
                        const data = { sub: userId }
                        //creo el token y convierto el obj a json con sign
                        const token = jwt.sign(data,'pau la lia')
                        
                        res.json(token)
                    })
                    .catch(error => {
                        res.status(400).json({ error: error.message })
                    })
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        //----------------
        api.get('/users', (req, res) => {
            try {
                //retrieveUser
                const authorization = req.headers.authorization

                const token = authorization.slice(7)
                const data = jwt.verify(token,'pau la lia')
                const userId = data.sub

                retrieveUser(userId)
                    .then(user => {
                        res.json(user)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })
        //createPost
        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)
                const data = jwt.verify(token,'pau la lia')
                const userId = data.sub

                const image = req.body.image
                const text = req.body.text

                createPost(userId, image, text)
                    .then(() => {
                        res.status(201).send()
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })

        //retrievePosts
        api.get('/posts', (req, res) => {
            const authorization = req.headers.authorization
            const token = authorization.slice(7)
                const data = jwt.verify(token,'pau la lia')
                const userId = data.sub
            try {
                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => {
                        res.status(400).json({ error: error.message })
                    })

            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })

        //retrievePost
        api.get('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,'pau la lia')
                const userId = data.sub
                const postId = req.params.postId

                retrievePost(userId, postId)
                    .then(post => res.json(post))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })

        //update post
        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {

            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,'pau la lia')
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

        //deletePost
        api.delete('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)
                const data = jwt.verify(token,'pau la lia')
                const userId = data.sub
                const postId = req.params.postId

                deletePost(userId, postId)
                    .then(() => res.send()) // 204 4n status
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })

            }
        })

        api.listen(9000, () => console.log('API running '))
    })