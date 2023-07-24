require('dotenv').config()
const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrieveUser('64be84c6120a11c82a588f7d'))
    .then((user) => console.log('User retrieve :', user))
    .catch(error => console.error(error.message))
    .finally(() => mongoose.disconnect())