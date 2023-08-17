require('dotenv').config()

const toggleFavPost = require('./toggleFavPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => toggleFavPost('64ba5c3d4d874dc848d73d8b', '64ba5ce5cac68379288ecb83'))
    .then(() => console.log('fav post toggled'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())