require('dotenv').config()
const mongoose = require('mongoose')
const toggleFavPost = require ('./toggleFavPost')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => toggleFavPost('64be2d6dfdec86be08b213be', '64be2db3d3230d43650a4584'))
    .then(() => console.log('toggle fav posts updated'))
    .catch(error => console.error(error))   
    .finally(() => mongoose.disconnect())    
       