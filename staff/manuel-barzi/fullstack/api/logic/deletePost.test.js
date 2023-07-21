require('dotenv').config()

const deletePost = require('./deletePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => deletePost('64ba58fc7ec28d08c1679721', '64ba5a8f24f37d9ab87634f1'))
    .then(() => console.log('post deleted'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())