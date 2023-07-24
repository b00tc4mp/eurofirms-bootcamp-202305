require('dotenv').config()
const retrievePosts = require('./retrievePosts')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePosts('64be84c6120a11c82a588f7d'))
    .then(posts => console.log('posts retrieved', posts))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())