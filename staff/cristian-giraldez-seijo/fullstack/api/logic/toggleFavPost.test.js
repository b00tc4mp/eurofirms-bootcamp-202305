require('dotenv').config()

const toggleFavPost = require('./toggleFavPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => toggleFavPost('64baaad8863d87a1a2c2747b', '64bc07725c067a513ca3e41d'))
.then(() => console.log('fav post toggled'))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())