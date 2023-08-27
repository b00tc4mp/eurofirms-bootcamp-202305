require('dotenv').config()
const retrievePost = require('./retrievePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePost('64be84c6120a11c82a588f7d', '64bee5b0b7d379e47af488f3'))
    .then(post => console.log('post retrieved', post))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())