require('dotenv').config()

const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => retrieveUser('64ca53913668d155772687f7'))
    .then(user => console.log('User retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())



    
                