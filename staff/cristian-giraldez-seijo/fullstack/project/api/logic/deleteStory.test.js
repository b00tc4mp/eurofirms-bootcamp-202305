require('dotenv').config()

const deleteStory = require('./deleteStory')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => deleteStory('64c692b87263fa6aa997f17c', '64e8cf95f8c79f1b9da01a33'))
    .then(() => console.log('story deleted'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())