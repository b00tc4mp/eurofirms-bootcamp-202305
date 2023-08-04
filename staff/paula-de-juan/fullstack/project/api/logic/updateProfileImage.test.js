require('dotenv').config()
const updateProfileImage = require('./updateProfileImage')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/projectTest`)
    .then(() => updateProfileImage('64ccca0142bb1d2542b6d54b', 'https://www.covermesongs.com/wp-content/uploads/2018/09/larger_hendrix.jpg'))
    .then(() => console.log('image updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())