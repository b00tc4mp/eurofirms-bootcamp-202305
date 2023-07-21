/* The code is performing the following tasks: */
require('dotenv').config()
const { mongo, default: mongoose } = require('mongoose')
const authenticateUser = require('./authenticateUser')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => authenticateUser('beatles8@yah.com', '123123123'))
    .then((userId) => console.log(userId))
    .catch(err => console.error(err))
    .finally(() => mongoose.disconnect())