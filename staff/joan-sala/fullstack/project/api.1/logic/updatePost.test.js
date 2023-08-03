require('dotenv').config()

const updatePost = require('./updatePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => updatePost('64be2f24a9e3d0ab0f7b8c77','64be364f4a54efd5ff91686d', 'https://cdn.pixabay.com/photo/2023/06/23/19/34/campfire-8084064_640.jpg', 'prueba2'))
    .then(() => console.log('Post updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())