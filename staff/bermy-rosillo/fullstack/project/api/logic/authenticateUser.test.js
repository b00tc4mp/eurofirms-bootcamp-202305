require('dotenv').config()
const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() => authenticateUser('bermy13@gmail.com', '123123123'))
    .then(user => console.log('User authenticated ', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

