require('dotenv').config()
const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrieveUser('64be36824f741266e8b21174'))
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())