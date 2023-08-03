require('dotenv').config()
const mongoose = require('mongoose')
const retrieveUser = require('./retrieveUser')

mongoose.connect(process.env.MONGOOSE_URL_TEST)
    .then(() => retrieveUser('64bbd346c07c837fd1994a86'))
    .then(user => console.log(user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())