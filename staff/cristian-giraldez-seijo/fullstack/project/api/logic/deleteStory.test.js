require('dotenv').config()

const deleteStory = require('./deleteStory')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => deleteStory('64c7746cbc155714c1fecf58', '64d66842a4d00a886a645cc7'))
    .then(() => console.log('story deleted'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())