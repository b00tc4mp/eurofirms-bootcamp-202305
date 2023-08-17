require('dotenv').config()

const createPost = require('./createPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => createPost('64ba5c3d4d874dc848d73d8b', 'http://image.com/123', 'hola mundo'))
    .then(() => console.log('post created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())