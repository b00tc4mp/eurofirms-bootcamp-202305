// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env
const loadPanel = require('./loadPanel')

// Modules
const { mongoose } = require('dat')

const panelId = '64d107da2b4f0263e9c8a33e'

// main
mongoose.connect(MONGOOSE_URL)
        .then(() => loadPanel(panelId))
        .then(result => console.log(result))
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect())

