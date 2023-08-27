require('dotenv').config()
const updateAnswerScore = require('./updateAnswerAssessment')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() =>updateAnswerScore('64c3c0075f59a19a9d5c44ce','64c50bd23f5539691d872dc4','64d9e5a3794857a4e28b27da','64dbb0e81e489fe932325614', 10,'very good job'))
    .then(() => console.log('score sent'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())