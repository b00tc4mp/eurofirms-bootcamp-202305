require('dotenv').config()
const mongoose = require('mongoose')
const updateArtwork = require('./updateArtwork')


mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => updateArtwork('64ca081eb606ba7a08da823f',
        '64cb64e3c2b87e4bdc14d31e',
        'https://cdn.pixabay.com/photo/2012/03/04/00/22/animal-21898_1280.jpg',
        'owl'))
    .then(() => console.log('artworks updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
