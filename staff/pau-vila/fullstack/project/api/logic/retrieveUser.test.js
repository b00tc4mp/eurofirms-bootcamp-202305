require('dotenv').config()

const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => retrieveUser('64c40b3e47e5f49fef40913b'))
    .then(user => console.log('user retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())