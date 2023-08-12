// Enviroment
require('dotenv').config()
const {
    API_PORT,
    JWT_SECRET,
    MONGOOSE_URL
} = process.env

// Modules
const { mongoose } = require('dat')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// User-defined modules
// const { Dimension, Dimension2D, Block, Panel } = require('./logic/classes')
// const { sleep, display, validateString } = require('./logic/helpers')

const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser
} = require('./logic/users')

const {
    createPanel,
    retrievePanels,
    retrievePanelOne,
    retrievePanelWorking,
    updatePanel,
    updatePanelStatusToOptimize,
    updatePanelStatusReEdit,
    deletePanel,
    createBlock,
    deleteBlock
} = require('./logic/panels')

const api = express()
const jsonBodyParser = bodyParser.json()

mongoose.connect(MONGOOSE_URL)
    .then(() => {
        api.use(cors())

        // registerUser
        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, surname, zip, email, password } = req.body

                registerUser(name, surname, zip, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // authenticateUser
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                authenticateUser(email, password)
                    .then((userId) => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET)
                        res.json(token)
                    })
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // retrieveUser
        api.get('/users', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // updateUser
        api.patch('/users', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                const { name, surname, zip } = req.body

                updateUser(userId, name, surname, zip)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // createPanel
        api.post('/panels', jsonBodyParser, (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub

                const { reference, width, height } = req.body

                createPanel(userId, reference, width, height)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // retrievePanels
        api.get('/panels', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                retrievePanels(userId)
                    .then(panels => res.json(panels))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // retrievePanelOne
        api.get('/panels/:panelId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId } = req.params

                retrievePanelOne(userId, panelId)
                    .then(panel => res.json(panel))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // retrievePanelWorking
        api.get('/panels/:panelId/work', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId } = req.params

                retrievePanelWorking(userId, panelId)
                    .then(coors => res.json(coors))
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

                updatePanel(userId, panelId, reference, width, height)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // updatePanelStatusToOptimize
        api.patch('/panels/:panelId/optimize', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId } = req.params

                return updatePanelStatusToOptimize(userId, panelId)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        // updatePanelStatusReEdit
        api.patch('/panels/status/reedit/:panelId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)
                const userId = jwt.verify(token, JWT_SECRET).sub
                const { panelId } = req.params

                updatePanelStatusReEdit(userId, panelId)
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

                deletePanel(userId, panelId)
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

                createBlock(userId, panelId, width, height)
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

                deleteBlock(userId, panelId, blockId)
                    .then(() => res.send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) { res.status(400).json({ error: error.message }) }
        })

        api.listen(API_PORT, () => console.log(`API working in port ${API_PORT} ...`))
    })
