require('dotenv').config()
const mongoose = require('mongoose')
const registerUser = require('./registerUser')
const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/test`)
.then(() => registerUser('Luisito', 'lui@sito.com', '123123123'))
.then(() => console.log('usuario registrado'))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())