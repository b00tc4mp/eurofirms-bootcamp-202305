require('dotenv').config()
const retrievePosts = require('./retrievePosts')
const {mongoose} = require('mongoose')

const {MONGODB_URL} = process.env

mongoose.connect(`${MONGODB_URL}/instaflan-test`)
 .then(() => retrievePosts('64be4f673d55f3b03ce22b11'))
 .then((posts)=> console.log(posts))
 .catch(error => console.error(error))
 .finally(()=> mongoose.disconnect())