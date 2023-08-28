require('dotenv').config()

const retrieveMeetups = require('./retrieveMeetups')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePosts('64bc2a78f259b4508a00f5fa'))
    .then(posts => console.log('Posts retrieved', posts))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())