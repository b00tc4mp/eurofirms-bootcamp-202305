// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env
const resetPanel = require('./resetPanel')

// Modules
const { mongoose } = require('dat')

const panelId = '64d107da2b4f0263e9c8a33e'

// main
mongoose.connect(MONGOOSE_URL)
        .then(() => resetPanel(panelId))
        .then(result => console.log(result))
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect())

