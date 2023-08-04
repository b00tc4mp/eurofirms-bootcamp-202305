require('dotenv').config()
const createTest = require('../logic/createTest')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() =>createTest('math', 'naturals numbers','this test is to learn how to manage the numbers','64c3c0075f59a19a9d5c44ce','2'))
    .then(() => console.log('Test created '))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())