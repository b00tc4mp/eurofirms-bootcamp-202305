// Enviroment
require('dotenv').config()
const {
    // API_PORT,
    // JWT_SECRET,
    MONGOOSE_URL
} = process.env

// Modules
const mongoose = require('mongoose')
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const jwt = require('jsonwebtoken')

// User-defined modules
// const { Dimension, Dimension2D, Block, Panel } = require('./logic/classes')
// const { sleep, display, validateString } = require('./logic/helpers')


// modules user defined in calc
// const { PanelDB } = require('../data')
// const { Dimension, Dimension2D, Block, Panel } = require('../logic/classes')
// const { sleep, display, validateString } = require('../logic/helpers')


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
    updatePanelStatusDB,
    deletePanelDB,
    createBlockDB,
    deleteBlockDB
} = require('./logic/panel-db')

// const api = express()
// const jsonBodyParser = bodyParser.json()

mongoose.connect(MONGOOSE_URL)
    .then(() => {
        // api.use(cors())

        

        // api.listen(API_PORT, () => console.log(`API working in port ${API_PORT} ...`))
    })
    