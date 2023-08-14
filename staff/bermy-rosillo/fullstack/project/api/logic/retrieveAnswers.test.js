require('dotenv').config()
const retrieveAnswers = require('./retrieveAnswers')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() =>retrieveAnswers('64c3c0075f59a19a9d5c44ce','64c50b907b4ca13e06e1869d','64cccd94d920e3d0f2535b61'))
    .then((result) => console.log(result))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())