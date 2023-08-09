require('dotenv').config()
const updateProfileEmail = require('./updateProfileEmail')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/projectTest`)
    .then(() => updateProfileEmail('64c28a3e1a0437f5273b30a7', 'paula@adalovecraft.com'))
    .then(() => console.log('email updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())