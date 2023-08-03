// Enviroment
require('dotenv').config()
const {
    API_PORT,
    JWT_SECRET,
    MONGOOSE_URL
} = process.env

// Modules
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// User-defined modules
// const { Dimension, Dimension2D, Block, Panel } = require('./logic/classes')
// const { sleep, display, validateString } = require('./logic/helpers')

const {
    registerUserDB,
    authenticateUserDB,
    retrieveUserDB,
    updateUserDB
} = require('./logic/user-db')

const {
    createPanelDB,
    retrievePanelsDB,
    retrievePanelOneDB,
    updatePanelDB,
    deletePanelDB,
    createBlockDB,
    deleteBlockDB
} = require('./logic/panel-db')

const api = express()
const jsonBodyParser = bodyParser.json()

mongoose.connect(MONGOOSE_URL)
    .then(() => {
        api.use(cors())

        // registerUserDB
        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, surname, zip, email, password } = req.body

                registerUserDB(name, surname, zip, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // authenticateUserDB
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                authenticateUserDB(email, password)
                    .then((userId) => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET)
                        res.json(token)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // retrieveUserDB
        api.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                retrieveUserDB(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // updateUserDB
        api.patch('/users', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                const { name, surname, zip } = req.body

                updateUserDB(userId, name, surname, zip)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // createPanelDB
        api.post('/panels', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                const { reference, width, height } = req.body

                createPanelDB(userId, reference, width, height)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // retrievePanelsDB
        api.get('/panels', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                retrievePanelsDB(userId)
                    .then(panels => res.json(panels))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // retrievePanelOneDB
        api.get('/panels/:panelId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId } = req.params

                retrievePanelOneDB(userId, panelId)
                    .then(panel => res.json(panel))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // updatePanel
        api.patch('/panels/:panelId', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId } = req.params

                const { reference, width, height } = req.body

                updatePanelDB(userId, panelId, reference, width, height)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // deletePanel
        api.delete('/panels/:panelId', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId } = req.params

                deletePanelDB(userId, panelId)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // createBlock
        api.post('/blocks', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                const { panelId, width, height } = req.body

                createBlockDB(userId, panelId, width, height)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // deleteBlock
        api.delete('/blocks/:panelId/:blockId', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId, blockId } = req.params

                deleteBlockDB(userId, panelId, blockId)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.listen(API_PORT, () => console.log(`API funcionando en ${API_PORT}...`))
    })
    