/* The code is performing the following tasks: */
require('dotenv').config()
const { mongo, default: mongoose } = require('mongoose')
const registerUser = require('./registerUser')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser('McCartney', 'beatles8@yah.com', '123123123'))
    .then(() => console.log('User Registered!'))
    .catch(err => console.error(err))
    .finally(() => mongoose.disconnect())