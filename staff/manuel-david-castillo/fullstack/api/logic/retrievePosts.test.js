require('dotenv').config()
const retrievePosts = require('./retrievePosts')
const {mongoose} = require('mongoose')

const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/test`)
 .then(() => retrievePosts('64ba8ba842cda8317c8989d8'))
 .then((posts)=> console.log(posts))
 .catch(error => console.error(error))
 .finally(()=> mongoose.disconnect())