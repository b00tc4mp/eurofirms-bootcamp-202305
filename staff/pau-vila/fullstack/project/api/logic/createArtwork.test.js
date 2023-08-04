require('dotenv').config()

const createArtwork = require('./createArtwork')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => createArtwork('64ca081eb606ba7a08da823f',
        'https://cdn.pixabay.com/photo/2012/03/04/00/22/animal-21898_1280.jpg',
        'owl',
        'linden wood',
        ['metraquilate', 'iron']))
    .then(() => console.log('artwork created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
