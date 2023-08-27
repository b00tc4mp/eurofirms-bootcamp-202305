require('dotenv').config()
const createAnswer = require('./createAnswer')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() =>createAnswer('64c50bd23f5539691d872dc4','64d9e5a3794857a4e28b27da','four is a natural number'))
    .then(() => console.log('answer sent'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())