require('dotenv').config()

const retrievePost = require('./retrievePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePost('64ba41713e6f36aae5ac1401', '64ba53ad355ca635dfcf7f8c'))
    .then(post => console.log('post retrieved', post))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
