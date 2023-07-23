require('dotenv').config()

const retrievePosts = require('./retrievePosts')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => retrievePosts('64baaad8863d87a1a2c2747b'))
.then(posts => console.log('posts retrieved', posts))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())