const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const context = require('./logic/context')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')
const createPost = require('./logic/createPost')
const updatePost = require('./logic/updatePost')
const deletePost = require('./logic/deletePost')
const retrievePost = require('./logic/retrievePost')
const retrievePosts = require('./logic/retrievePosts')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const toggleFavPost = require('./logic/toggleFavPost')


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

        /* `const jsonBodyParser` está creando una instancia del middleware `body-parser` con el método
        `json()`. Este middleware se usa para analizar el cuerpo de la solicitud de las solicitudes
        entrantes con cargas JSON. Permite que la API acceda a los datos JSON enviados en el cuerpo de la
        solicitud y que estén disponibles en el objeto `req.body`. */
        const jsonBodyParser = bodyParser.json()

        api.use(cors())
        /* `api.get('/', (req, res)` está definiendo un controlador de ruta para la solicitud GET a la URL raíz
        ("/") de la API. Cuando se realiza una solicitud GET a la URL raíz, la devolución de llamada Se
        ejecutará la función `(req, res)` En este caso, la función de devolución de llamada simplemente
        envía la respuesta "hola mundo ;)" de vuelta al cliente. */
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

                        const token = jwt.sign(data, 'idem love')

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

                const data = jwt.verify(token, 'idem love')

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

                /* La línea `const data = jwt.verify(token, 'idem love')` está verificando la
                autenticidad e integridad de un JSON Web Token (JWT). */
                const data = jwt.verify(token, 'idem love')

                /* `const userId = data.sub` extrae el valor de la propiedad `sub` del objeto `data` y
                lo asigna a la variable `userId`. La propiedad `sub` normalmente representa el
                asunto del JWT (JSON Web Token), que en este caso es el ID de usuario. Este ID de
                usuario se utiliza para identificar al usuario que realiza la solicitud y realizar
                operaciones específicas para ese usuario, como crear, actualizar o eliminar
                publicaciones. */
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

                const data = jwt.verify(token, 'idem love')

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

                const data = jwt.verify(token, 'idem love')

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

                const data = jwt.verify(token, 'idem love')

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

                const data = jwt.verify(token, 'idem love')

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

                const data = jwt.verify(token, 'idem love')

                const userId = data.sub

                retrievePosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(9000, () => console.log('API running in port 9000'))

    })