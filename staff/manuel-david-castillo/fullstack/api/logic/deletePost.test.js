require('dotenv').config()
const deletePost = require('./deletePost')
const mongoose = require('mongoose')

const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/test`)
    .then(() => deletePost('64ba8ba842cda8317c8989d8', '64baa31a5cc41ed40a81ff3a'))
    .then(() => console.log('post deleted'))
    .catch(error => console.error(error))
    .finally(()=> mongoose.disconnect())