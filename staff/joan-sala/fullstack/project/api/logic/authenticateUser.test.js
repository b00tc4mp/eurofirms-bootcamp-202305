require('dotenv').config()

const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => authenticateUser('peter@pan.com', '123123123'))
    .then(userId => console.log('User authenticated', userId))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())