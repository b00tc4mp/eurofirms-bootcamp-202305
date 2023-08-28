require('dotenv').config()

const retrieveMeetups = require('./retrieveMeetups')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => retrieveMeetups('64cfc4e038db62983870b606'))
    .then(meetups => console.log('Meetups retrieved', meetups))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())