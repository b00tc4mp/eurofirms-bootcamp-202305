require('dotenv').config()

const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrieveUser('64bc2a78f259b4508a00f5fa'))
    .then(user => console.log('User retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())



    
                