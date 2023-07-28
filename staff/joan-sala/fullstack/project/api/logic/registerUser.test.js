require('dotenv').config()

const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser('Peter Pan', 'peter@pan.com', '123123123'))
    .then(() => console.log('User create'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

