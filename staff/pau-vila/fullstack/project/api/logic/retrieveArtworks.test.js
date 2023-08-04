const retrieveArtworks = require ('./retrieveArtworks')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
.then(() => retrieveArtworks('64ca081eb606ba7a08da823f', '64ca090217240a04d53ab667'))
.then(artworks => console.log('artworks retrieved', artworks))
.catch(error => console.error(error))    
.finally(() => mongoose.disconnect()) 