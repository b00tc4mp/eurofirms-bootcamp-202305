require('dotenv').config()
const retrieveStudentTest = require('../logic/retrieveStudentTests')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`) //StudentId , testId, answerId
.then(()=>retrieveStudentTest('64c50bd23f5539691d872dc4','64d9e5a3794857a4e28b27da','64dbb0e81e489fe932325614'))
.then(tests=>console.log('tests',tests))
.catch(error=>console.error(error))
.finally(()=>mongoose.disconnect())
