require('dotenv').config()

const createPost = require('./createPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => createPost('64baaad8863d87a1a2c2747b', 'http://image.com/123', 'hola mundo'))
    .then(() => console.log('Post Created!'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())