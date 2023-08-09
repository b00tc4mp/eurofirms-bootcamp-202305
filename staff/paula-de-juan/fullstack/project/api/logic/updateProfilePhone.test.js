require('dotenv').config()
const updateProfilePhone = require('./updateProfilePhone')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/projectTest`)
    .then(() => updateProfilePhone('64c28a3e1a0437f5273b30a7', '722500100'))
    .then(() => console.log('phone updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())