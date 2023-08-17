require('dotenv').config()
const updateAnswerScore = require('./updateAnswerScore')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() =>updateAnswerScore('64de2fbab89c90fe31408ba8','64c50bd23f5539691d872dc4','64dbb0e81e489fe932325614','64d9e5a3794857a4e28b27da', 10,'very good job'))
    .then(() => console.log('score sent'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())