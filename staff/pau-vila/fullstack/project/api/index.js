require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    createArtwork,
    retrieveArtwork,
    updateArtwork,
    deleteArtwork,
    retrieveArtworks,
    toggleFavArtwork,
    createWorkshop,
    updateWorkshop,
    deleteWorkshop,
    retrieveWorkshop,
    retrieveWorkshops,
    toggleAttendants
} = require('./logic')

const cors = require('cors')
const jwt = require('jsonwebtoken')

const { PORT, MONGODB_URL, JWT_SECRET } = process.env

mongoose.connect(`${MONGODB_URL}/testornorecicla`)
    .then(() => {
        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.get('/', (req, res) => {
            const q = req.query.q

            res.send(`you requested me to search: ${q}`)
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            const { name, email, password, zip, phone } = req.body

            try {
                registerUser(name, email, password, zip, phone)
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

                //const data = jwt.verify(token, JWT_SECRET)

                const userId = jwt.verify(token, JWT_SECRET).sub

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/artworks', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const userId = jwt.verify(token, JWT_SECRET).sub

                const { image, description, materials, ornaments } = req.body

                createArtwork(userId, image, description, materials, ornaments)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/artworks/:artworkId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub
                const { artworkId } = req.params

                retrieveArtwork(userId, artworkId)
                    .then((artwork) => res.json(artwork))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/artworks', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                retrieveArtworks(userId)
                    .then((artworks) => res.json(artworks))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })
        api.patch('/artworks/:artworkId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { artworkId } = req.params

                const { image, description, materials, ornaments } = req.body

                updateArtwork(userId, artworkId, image, description, materials, ornaments)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/artworks/:artworkId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { artworkId } = req.params

                deleteArtwork(userId, artworkId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.put('/artworks/:artworkId/favs', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub
                const { artworkId } = req.params

                toggleFavArtwork(userId, artworkId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/workshops', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const userId = jwt.verify(token, JWT_SECRET).sub

                const { description, place, codeZIP, dateStart,
                    dateEnd, attendantsLimit, image, video } = req.body

                createWorkshop(userId, description, place, codeZIP, new Date(dateStart),
                    new Date(dateEnd), attendantsLimit, image, video)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/workshops/:workshopId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub
                const { workshopId } = req.params

                retrieveWorkshop(userId, workshopId)
                    .then((workshop) => res.json(workshop))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/workshops', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                retrieveWorkshops(userId)
                    .then((workshops) => res.json(workshops))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.patch('/workshops/:workshopId', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { workshopId } = req.params

                const { place, codeZIP, dateStart, dateEnd, image, video,
                    description, attendantsLimit } = req.body

                updateWorkshop(userId, workshopId, place,
                    codeZIP, new Date(dateStart), new Date(dateEnd), image, video, description, attendantsLimit)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.delete('/workshops/:workshopId', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub

                const { workshopId } = req.params

                deleteWorkshop(userId, workshopId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.put('/workshops/:workshopId/attendants', (req, res) => {
            try {
                const { authorization } = req.headers
                const token = authorization.slice(7)

                const data = jwt.verify(token, JWT_SECRET)

                const userId = data.sub
                const { workshopId } = req.params

                toggleAttendants(userId, workshopId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.listen(PORT, () => console.log(`API running in port ${PORT}`))

    })