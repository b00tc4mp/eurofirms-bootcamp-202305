require('dotenv').config()
const mongoose = require('mongoose')
const updatePost = require('./updatePost')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => updatePost('64be84c6120a11c82a588f7d', '64be8ba271fc30d45385434e', 'https://lumiere-a.akamaihd.net/v1/images/pinocho_1940_01_97f54b38.jpeg?region=308,1,1082,1079', ' update pinocho'))
    .then(() => console.log('Updated post'))
    .catch(() => console.error(error))
    .finally(() => mongoose.disconnect())