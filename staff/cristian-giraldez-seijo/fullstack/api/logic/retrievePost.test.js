require('dotenv').config()

const retrievePost = require('./retrievePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => retrievePost('64baaad8863d87a1a2c2747b', '64bc07725c067a513ca3e41d'))
.then(post => console.log('post retrieved', post))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())