require('dotenv').config()

const retrievePosts = require('./retrievePosts')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePosts('64ba5c3d4d874dc848d73d8b'))
    .then(posts => console.log('posts retrieved', posts))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())