require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/projectTest`)
    .then(() => registerUser('Amy', 'AmyWinehouse', 'amy@winehouse.com', '655115432', 'backtoblack'))
                .then(() => console.log('user created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())