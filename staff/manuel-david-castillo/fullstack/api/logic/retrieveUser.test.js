require('dotenv').config()
const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')
const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/test`)
    .then(() => retrieveUser('649da15f5792d969ba2738ca'))
    .then((user) => console.log(user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())