require('dotenv').config()
const toggleFavPost = require('./toggleFavPost')
const mongoose = require('mongoose')
const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/test`)
    .then(() => toggleFavPost('64ba8ba842cda8317c8989d8', '64baa32f694f670774cd4340'))
    .then(() => console.log('fav changed'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())