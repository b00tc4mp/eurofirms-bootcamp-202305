require('dotenv').config()
const mongoose = require('mongoose')
const toggleFavArtwork = require('./toggleFavArtwork')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
  .then(() => toggleFavArtwork('64ca081eb606ba7a08da823f', '64ca6e27efb94763762921c3'))
  .then(() => console.log('toggle fav artwork updated'))
  .catch(error => console.error(error))
  .finally(() => mongoose.disconnect())
