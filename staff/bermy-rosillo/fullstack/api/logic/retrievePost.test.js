require('dotenv').config()
const retrievePost = require('./retrievePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePost('64be84c6120a11c82a588f7d', '64be8ba271fc30d45385434e'))
    .then(post => console.log('post retrieved', post))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())