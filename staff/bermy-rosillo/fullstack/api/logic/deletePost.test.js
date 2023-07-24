require('dotenv').config()
const mongoose = require('mongoose')
const deletePost = require('./deletePost')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => deletePost('64be84c6120a11c82a588f7d', '64be8ba271fc30d45385434e'))
    .then(() => console.log('Post deleted'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())