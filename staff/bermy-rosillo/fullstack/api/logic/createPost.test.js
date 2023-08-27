require('dotenv').config()
const mongoose = require('mongoose')
const createPost = require('./createPost')

mongoose.connect(`${process.env.MONGODB_URL}`)
    .then(() => createPost('64be84c6120a11c82a588f7d', 'https://www.microsol.es/wp-content/uploads/2022/01/9788418039225.jpg', 'pinocho dance'))
    .then(() => console.log('Post created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())