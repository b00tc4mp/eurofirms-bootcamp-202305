require('dotenv').config()

const retrievePost = require('./retrievePost')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePost('64b069ac44f661e758bd', '64b84f74c0b72acbc49d9a76'))
    .then(posts => console.log('Post retrieve', post))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())