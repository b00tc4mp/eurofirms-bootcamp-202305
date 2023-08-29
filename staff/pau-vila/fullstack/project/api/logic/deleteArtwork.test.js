require('dotenv').config()
const deleteArtwork = require('./deleteArtwork')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => deleteArtwork('64ca081eb606ba7a08da823f', '64ca090217240a04d53ab667'))
    .then(() => console.log('artwork deleted'))
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())