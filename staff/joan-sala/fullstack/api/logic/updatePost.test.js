require('dotenv').config()

const updatePost = require('./updatePost')
const mongoose = require('mongoose')

mongoose.connect()
    .then(() => updatPost('64a52e863532b3946bf9fa6f', '64a537b58b862f64c2596ed2'))
    .then(() => console.log('Post updatd'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())