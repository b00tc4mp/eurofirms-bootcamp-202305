require('dotenv').config()
const retrieveStudentAnswers = require('./retrieveStudentAnswers')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`) 
.then(()=>retrieveStudentAnswers('64c50bd23f5539691d872dc4'))
.then(answers=>console.log('answers',answers))
.catch(error=>console.error(error))
.finally(()=>mongoose.disconnect())
