require('dotenv').config()

const updateMeetup = require('./updateMeetup')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => updateMeetup(
        '64cfc4e038db62983870b606',
        '64d368bbc935272bc8a1fa34',
        'https://cdn.pixabay.com/photo/2023/06/23/19/34/campfire-8084064_640.jpg',
        'esto es una prueba, se podrá borrar',
        'mountainbike',
        'Calle A',
        new Date(),
        'https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_61593e24d12b22.68235586_FPpreview.mp4'
    ))
    .then(() => console.log('Meetup updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())