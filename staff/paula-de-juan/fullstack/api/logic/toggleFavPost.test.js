require('dotenv').config()

const toggleFavPost = require('./toggleFavPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => toggleFavPost('64be36824f741266e8b21174','64be38014a8efc859fb3a0d4'))
    .then(() => console.log ('fav post toggled'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())