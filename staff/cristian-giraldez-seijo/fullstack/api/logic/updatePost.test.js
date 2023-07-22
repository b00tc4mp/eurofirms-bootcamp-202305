require('dotenv').config()

const updatePost = require('./updatePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => updatePost('64baaad8863d87a1a2c2747b', '64bc07725c067a513ca3e41d', 'http://image.com/heidi', 'hello heidi'))
.then(() => console.log('post updated'))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())