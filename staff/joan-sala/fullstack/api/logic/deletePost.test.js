require('dotenv').config()

const deletePost = require('./deletePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => deletePost('64b069ac44f6aaaa61e758bd  ', '64b84f74c0b72acbc49d9a76'))
    .then(() => console.log('Post deleted'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
    
            