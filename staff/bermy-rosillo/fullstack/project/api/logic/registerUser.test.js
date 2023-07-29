require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
.then(()=>registerUser('Pau','123123123','pau@gmail.com','student'))
.then(()=>console.log('user created'))
.catch(error=>console.error(error))
.finally(()=>mongoose.disconnect())