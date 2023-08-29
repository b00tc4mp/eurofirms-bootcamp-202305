require('dotenv').config()

const retrieveStories = require('./retrieveStories')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => retrieveStories())
.then(stories => console.log('stories retrieved', stories))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())