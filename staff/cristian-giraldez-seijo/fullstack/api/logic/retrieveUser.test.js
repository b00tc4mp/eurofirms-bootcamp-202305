require('dotenv').config()

const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrieveUser('64baaad8863d87a1a2c2747b'))
    .then(user => console.log('user retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())