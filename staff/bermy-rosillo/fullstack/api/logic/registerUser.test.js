require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser('pinocho', 'pin2@ocho.com', '123123123'))
    .then(() => console.log('User created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())