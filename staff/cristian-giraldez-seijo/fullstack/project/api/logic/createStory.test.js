require('dotenv').config()
const { mongo, default: mongoose } = require('mongoose')
const createStory = require('./createStory')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => createStory('64c7746cbc155714c1fecf58', 'hola mundo!', '', 'testting story', 'What now?'))
.then(() => console.log('story created'))
.catch(error => console.error(error))
.finally(() => mongoose.disconnect())