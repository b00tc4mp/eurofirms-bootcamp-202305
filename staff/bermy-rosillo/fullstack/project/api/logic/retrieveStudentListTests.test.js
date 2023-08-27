require('dotenv').config()
const retrieveStudentListTests = require('./retrieveStudentListTests')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() => retrieveStudentListTests('64c50bd23f5539691d872dc4'))
    .then(list => console.log('List Tests', list))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

