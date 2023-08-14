require('dotenv').config()
const retrieveTest = require('./retrieveTest')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() =>retrieveTest('64c3c0075f59a19a9d5c44ce','64cccd94d920e3d0f2535b61'))
    .then((test) => console.log(test))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())