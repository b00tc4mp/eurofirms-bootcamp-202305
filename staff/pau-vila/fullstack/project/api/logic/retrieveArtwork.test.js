const retrieveArtwork = require ('./retrieveArtwork')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
.then(() => retrieveArtwork('64ca081eb606ba7a08da823f', '64ca090217240a04d53ab667'))
.then(artwork => console.log('artwork retrieved', artwork))
.catch(error => console.error(error))    
.finally(() => mongoose.disconnect()) 