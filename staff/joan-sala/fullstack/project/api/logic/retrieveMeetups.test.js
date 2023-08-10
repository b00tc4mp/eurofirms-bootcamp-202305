require('dotenv').config()

const retrieveMeetups = require('./retrieveMeetups')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => retrieveMeetups('64d4ae912c0032dca556c061'))
    .then(posts => console.log('Meetups retrieved', meetups))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())