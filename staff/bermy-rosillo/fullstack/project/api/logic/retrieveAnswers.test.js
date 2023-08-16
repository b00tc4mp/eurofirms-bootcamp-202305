require('dotenv').config()
const retrieveAnswers = require('./retrieveAnswers')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() =>retrieveAnswers('64c3c0075f59a19a9d5c44ce','64c50bd23f5539691d872dc4','64d9e5a3794857a4e28b27da'))
    .then((result) => console.log(result))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())