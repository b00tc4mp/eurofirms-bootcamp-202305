const express = require('express') 
const mongodb = require('mongodb')
const context =  require('./logic/context')
const bodyParser = require('body-parser')

const authenticateUser = require('./logic/authenticatedUser')
const createPost = require('./logic/createPost')
const deletePost = require('./logic/deletePost')
const registerUser = require('./logic/registerUser')
const retrievePost = require('./logic/retrievePost')
const retrieveUser = require('./logic/retrieveUser')
const retrievePosts = require('./logic/retrievePosts')
const updatePost = require('./logic/updatePost')

const {MongoClient} = mongodb

const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then((connection)=>{
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.get('/',(req, res) => {
            res.send('hola mundo')
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const {email, password} = req.body 

                authenticateUser(email, password)
                .then((id) => res.status(201).json(id))
                .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/posts', jsonBodyParser, (req, res)=>{
            try{
                const { authorization } = req.headers 
                const userId = authorization.slice(7)

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
            const userId = authorization.slice(7)

            const {postId} = req.params

            try{
                deletePost(userId, postId)
                .then(()=> res.status(200).send())
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

        api.get('/posts/:postId', (req, res) => {
            try {
                const {authorization} = req.headers
                const userId = authorization.slice(7)

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
                const userId = authorization.slice(7)

                retrievePosts(userId)
                .then((posts)=> res.json(posts))
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.get('/users', (req, res) => {
            try {
                const {authorization} = req.headers
                const userId = authorization.slice(7)

                retrieveUser(userId)
                .then((user)=> res.json(user))
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            const {authorization} = req.headers
            const userId = authorization.slice(7)

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