require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
.then(()=>registerUser('Bermy','Rosillo','123123123','bermy13@gmail.com','teacher'))
.then(()=>console.log('user created'))
.catch(error=>console.error(error))
.finally(()=>mongoose.disconnect())