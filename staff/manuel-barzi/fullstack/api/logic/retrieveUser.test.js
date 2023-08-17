require('dotenv').config()

const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrieveUser('64ba5c3d4d874dc848d73d8b'))
    .then(user => console.log('user retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())