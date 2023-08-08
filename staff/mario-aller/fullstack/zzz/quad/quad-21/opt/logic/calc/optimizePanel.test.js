// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env
const optimizePanel = require('./optimizePanel')
const savePanel = require('./savePanel')
const resetPanel = require('./resetPanel')

// Modules
const { mongoose } = require('dat')

const panelId = '64d107da2b4f0263e9c8a33e'

// main
mongoose.connect(MONGOOSE_URL)
    .then(() => resetPanel(panelId))
    .then((panel) => optimizePanel(panel))
    .then((panel) => savePanel(panelId))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
