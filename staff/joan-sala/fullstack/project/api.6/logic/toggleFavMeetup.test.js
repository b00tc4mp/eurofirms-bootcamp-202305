require('dotenv').config()

const toggleFavMeetup = require('./toggleFavMeetup')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/testMeetupBikes`)
    .then(() => toggleFavMeetup('64be2f24a9e3d0ab0f7b8c77', '64d5f6d8df8478b818810727'))
    .then(meetups => console.log('Toggle Fav Meetup Ok'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())