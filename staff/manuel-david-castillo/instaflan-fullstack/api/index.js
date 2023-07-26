require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const {authenticateUser, 
    createPost, 
    deletePost,
    editPost,
    registerUser, 
    retrievePost,
    retrievePosts
    } = require('./logic/index')

const {MONGODB_URL, PORT, JWT_SECRET} = process.env

mongoose.connect(`${MONGODB_URL}/instaflan-data`)
    .then(() => {

        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const {email, password} = req.body 

                authenticateUser(email, password)
                .then((userId) => {
                    const data = {sub: userId}

                    const token = jwt.sign(data, JWT_SECRET)

                    res.json(token)
                })
                .catch(error => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const {name, image, description, email, password} = req.body

                registerUser(name, image, description, email, password)
                .then(()=> {res.status(201).send()})
                .catch((error) => res.status(400).json({error: error.message}))
            }
            catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        api.post('/posts', jsonBodyParser, (req, res)=>{
            try{
                const { authorization } = req.headers 
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)
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

                const data = jwt.verify(token, JWT_SECRET)
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

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            const {authorization} = req.headers
            const token = authorization.slice(7)

            const data = jwt.verify(token, JWT_SECRET)
            const userId = data.sub

            const {image, text} = req.body
            const {postId} = req.params

            try{
                editPost(userId, postId, image, text)
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

                const data = jwt.verify(token, JWT_SECRET)
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

                const data = jwt.verify(token, JWT_SECRET)
                const userId = data.sub

                retrievePosts(userId)
                .then((posts)=> res.json(posts))
                .catch((error) => res.status(400).json({error: error.message}))
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })


        api.listen(PORT, () => console.log('Servidor lanzado en puerto 8000'))
    })