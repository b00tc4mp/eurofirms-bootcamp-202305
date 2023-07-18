const express = require('express') 
const mongodb = require('mongodb')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const context =  require('./logic/context')

const authenticateUser = require('./logic/authenticatedUser')
const createPost = require('./logic/createPost')
const deletePost = require('./logic/deletePost')
const registerUser = require('./logic/registerUser')
const retrievePost = require('./logic/retrievePost')
const retrieveUser = require('./logic/retrieveUser')
const retrievePosts = require('./logic/retrievePosts')
const toggleFavPost = require('./logic/toggleFavPost')
const updatePost = require('./logic/updatePost')

const {MongoClient} = mongodb

const client = new MongoClient("mongodb://127.0.0.1:27017")

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

        api.get('/users/fav-posts/:postId', (req, res) => {
            try {
                const {authorization} = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, 'papi ya tu sabeh')
                const userId = data.sub

                const {postId} = req.params

                toggleFavPost(userId, postId)
                .then(() => res.status(200).json().send())
                .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const {email, password} = req.body 

                authenticateUser(email, password)
                .then((userId) => {
                    const data = {sub: userId}

                    const token = jwt.sign(data, 'papi ya tu sabeh')

                    res.json(token)
                })
                .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/users', jsonBodyParser, (req, res)=>{
            try{
                const {name, email, password} = req.body

                registerUser(name, email, password)
                .then(()=> {res.status(201).send()})
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.get('/users', (req, res) => {
            try {
                const {authorization} = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, 'papi ya tu sabeh')
                const userId = data.sub

                retrieveUser(userId)
                .then((user)=> res.json(user))
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/posts', jsonBodyParser, (req, res)=>{
            try{
                const { authorization } = req.headers 
                const token = authorization.slice(7)

                const data = jwt.verify(token, 'papi ya tu sabeh')
                const userId = data.sub

                const {image, text} = req.body

                createPost(userId, image, text)
                .then(()=> {res.status(201).send()})
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.delete('/posts/:postId', jsonBodyParser, (req, res) => {
            const {authorization} = req.headers
            const token = authorization.slice(7)

                const data = jwt.verify(token, 'papi ya tu sabeh')
                const userId = data.sub

            const {postId} = req.params

            try{
                deletePost(userId, postId)
                .then(()=> res.status(200).send())
                .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })


        api.get('/posts/:postId', (req, res) => {
            try {
                const {authorization} = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, 'papi ya tu sabeh')
                const userId = data.sub

                const {postId} = req.params

                retrievePost(userId, postId)
                .then((post)=> res.json(post))
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.get('/posts', (req, res) => {
            try {
                const {authorization} = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, 'papi ya tu sabeh')
                const userId = data.sub

                retrievePosts(userId)
                .then((posts)=> res.json(posts))
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            const {authorization} = req.headers
            const token = authorization.slice(7)

            const data = jwt.verify(token, 'papi ya tu sabeh')
            const userId = data.sub

            const {image, text} = req.body
            const {postId} = req.params

            try{
                updatePost(userId, postId, image, text)
                .then(()=> res.status(200).send())
                .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.listen(9000, ()=> console.log('Servidor lanzado en localhost 9000'))
    })