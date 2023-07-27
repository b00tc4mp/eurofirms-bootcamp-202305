const mongoose = require('mongoose')
//const context = require('./context')
const authenticateUser = require('./authenticateUser')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => authenticateUser('pin2@ocho.com', '123123123')
        .then(userId => console.log('user authenticated:', userId)))
    .catch(error => console.error(error))

    .finally(() => mongoose.disconnect())