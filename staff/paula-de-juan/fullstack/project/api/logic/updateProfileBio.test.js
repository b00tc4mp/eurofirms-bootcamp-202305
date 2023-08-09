require('dotenv').config()
const updateProfileBio = require('./updateProfileBio')
const mongoose = require('mongoose')


mongoose.connect(`${process.env.MONGODB_URL}/projectTest`)
    .then(() => updateProfileBio('64ccca0142bb1d2542b6d54b', 'En Monterey Pop Festival la lie parda'))
    .then(() => console.log('bio updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())