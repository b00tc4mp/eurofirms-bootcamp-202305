require('dotenv').config()

const toggleFavMeetup = require('./toggleFavMeetup')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => toggleFavMeetup('64d207195f65607edaf4372a','64d368bbc935272bc8a1fa34'))
    .then(meetups => console.log('Toggle Fav Meetup Ok'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())