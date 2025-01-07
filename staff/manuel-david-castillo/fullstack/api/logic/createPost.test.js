require('dotenv').config()
const mongoose = require('mongoose')
const createPost = require('./createPost')

const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/test`)
 .then(() => createPost('64ba8ba842cda8317c8989d8', 
    'https://cl.buscafs.com/www.levelup.com/public/uploads/images/498938_1140x516.jpg', 
    'Rick Sanchez'))
 .then(()=> console.log('post created'))
 .catch(error => console.error(error))
 .finally(()=> mongoose.disconnect())