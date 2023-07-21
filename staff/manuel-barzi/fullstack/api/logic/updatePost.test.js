require('dotenv').config()

const updatePost = require('./updatePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => updatePost('64ba58fc7ec28d08c1679721', '64ba5a8f24f37d9ab87634f1', 'http://image.com/heidi', 'hello heidi'))
    .then(() => console.log('post updated'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
