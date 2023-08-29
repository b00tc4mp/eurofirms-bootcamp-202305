require('dotenv').config()
const mongoose = require('mongoose')
const updatePost = require('./updatePost')


mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => updatePost('64be2d6dfdec86be08b213be', '64be2db3d3230d43650a4584', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A58F095…', 'te adoro'))
    .then(() => console.log('posts updated'))
    .catch(error => console.error(error))   
    .finally(() => mongoose.disconnect())




