require('dotenv').config()

const retrievePost = require('./retrieveMeetup')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => retrieveMeetup('64ccf6f39acea11dc05e4dae', '64cfc4e038db62983870b606'))
    .then(meetup => console.log('Meetup retrieve', meetup))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())