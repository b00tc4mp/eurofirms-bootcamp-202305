require('dotenv').config()

const updateMeetup = require('./updateMeetup')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => updateMeetup('64be2f24a9e3d0ab0f7b8c77','64a5ba503b44fda9c1cd4967', 'https://cdn.pixabay.com/photo/2023/06/23/19/34/campfire-8084064_640.jpg', 'prueba2'))
    .then(() => console.log('Post updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())