require('dotenv').config()
const moongose = require('mongoose')
const retrievePost = require('./retrievePost')

const {MONGODB_URL} = process.env

moongose.connect(`${MONGODB_URL}/test`)
    .then(() => retrievePost('64ba8ba842cda8317c8989d8', '64baa31a5cc41ed40a81ff3a'))
    .then((post)=> console.log(post))
    .catch(error => console.error(error))
    .finally(()=> moongose.disconnect())