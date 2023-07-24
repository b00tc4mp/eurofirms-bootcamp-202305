require('dotenv').config()
const deletePost = require('./deletePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => deletePost('64be2d6dfdec86be08b213be', '64be2db3d3230d43650a4584'))
    .then(() => console.log('post deleted'))
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())

    
