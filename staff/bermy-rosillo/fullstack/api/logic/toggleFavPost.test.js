require('dotenv').config()
const mongoose = require('mongoose')
const toggleFavPost = require('./toggleFavPost')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => toggleFavPost('64be84c6120a11c82a588f7d', '64bee5b0b7d379e47af488f3'))
    .then(() => console.log('Fav post toggle '))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())