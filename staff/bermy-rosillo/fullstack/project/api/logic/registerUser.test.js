require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
.then(()=>registerUser('ignacio','123123123','ignacio@gmail.com','teacher'))
.then(()=>console.log('user created'))
.catch(error=>console.error(error))
.finally(()=>mongoose.disconnect())