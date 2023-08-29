require('dotenv').config()

const retrieveStory = require('./retrieveStory')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => retrieveStory('64d4b924fcbd4391fd6fbac6'))
.then(story => console.log('story retrieved', story))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())