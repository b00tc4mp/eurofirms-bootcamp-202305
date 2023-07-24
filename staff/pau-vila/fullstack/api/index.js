require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {
registerUser, 
authenticateUser, 
retrieveUser, 
createPost, 
updatePost, 
deletePost, 
retrievePost, 
retrievePosts, 
toggleFavPost 
} = require('./logic')

const cors = require('cors')
const jwt = require('jsonwebtoken')

const { PORT, MONGODB_URL, JWT_SECRET } = process.env

mongoose.connect(`${MONGODB_URL}/data`)
    .then(() => {
        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())
       
        api.get('/', (req, res) => {
            res.send('hola mundo ;)')
        })

        api.get('/', (req, res) => {
            const q = req.query.q

            res.send(`you requested me to search: ${q}`)
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            const { name, email, password } = req.body

            try {
                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            const { email, password } = req.body

            try {
                authenticateUser(email, password)
                    .then(userId => {
                        const data = { sub: userId }

                        const token = jwt.sign(data, JWT_SECRET)

                        res.json(token)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

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
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { image, text } = req.body

                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/posts/:postId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

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

        api.delete('/posts/:postId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

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
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { postId } = req.params

                retrievePost(userId, postId)
                    .then(post => res.json(post))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.put('/posts/:postId/favs', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub
                const postId = req.params.postId

                toggleFavPost(userId, postId)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.get('/posts', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(PORT, () => console.log(`API running in port ${PORT}`))

    })