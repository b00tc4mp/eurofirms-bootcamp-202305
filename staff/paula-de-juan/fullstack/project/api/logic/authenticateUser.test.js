require('dotenv').config()
const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/projectTest`)
    .then(() => authenticateUser('paula@love.com', '0123456789'))
                .then(userId => console.log('user authenticated', userId))
                .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
    