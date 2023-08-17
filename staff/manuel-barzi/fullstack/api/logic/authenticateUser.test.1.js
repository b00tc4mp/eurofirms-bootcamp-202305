require('dotenv').config()

const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => authenticateUser('james@hook.com', '123123123'))
    .then(userId => console.log('user authenticated', userId))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
