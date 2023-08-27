require('dotenv').config()
const retrieveUser = require('./retrieveUser')

const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() => retrieveUser('64c3c0075f59a19a9d5c44ce'))
    .then(user => console.log('User retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())