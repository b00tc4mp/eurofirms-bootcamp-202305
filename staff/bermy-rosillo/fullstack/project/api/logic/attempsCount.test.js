require('dotenv').config()
const attempsCount = require('./attempsCount')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`) //UserId  testId
    .then(() =>attempsCount('64c50bd23f5539691d872dc4','64d9e5a3794857a4e28b27da'))
    .then((attemps) => console.log('attemps', attemps))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())