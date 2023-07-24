const retrievePost = require ('./retrievePost')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => retrievePost('64be2ff2ab1c7f4a76ddc509', '64be3085b60593f43853ba69'))
.then(post => console.log('post retrieved', post))
.catch(error => console.error(error))    
.finally(() => mongoose.disconnect()) 