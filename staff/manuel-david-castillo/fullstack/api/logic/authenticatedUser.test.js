require('dotenv').config()
const mongoose = require('mongoose')
const authenticatedUser = require('./authenticatedUser')

const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/test`)
    .then(() => {return authenticatedUser('peter@pan.com', '123123123')})
    .then((userId) => console.log(userId))
    .catch(error => console.error(error))
    .finally(()=> mongoose.disconnect())