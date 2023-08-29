require('dotenv').config()

const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => retrieveUser('64ca081eb606ba7a08da823f'))
    .then(user => console.log('user retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())