require('dotenv').config()

const createArtwork = require('./createArtwork')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => createArtwork('64ca081eb606ba7a08da823f',
        'https://cdn.pixabay.com/photo/2016/09/28/10/18/camera-1700110_1280.jpg',
        'camera toy',
        'oak wood',
        ['silk ties', 'golden handlend']))
    .then(() => console.log('artwork created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
