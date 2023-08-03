require('dotenv').config()

const retrievePost = require('./retrieveMeetup')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => retrievePost('64be2f24a9e3d0ab0f7b8c77', '64a5ba503b44fda9c1cd4967'))
    .then(post => console.log('Post retrieve', post))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())