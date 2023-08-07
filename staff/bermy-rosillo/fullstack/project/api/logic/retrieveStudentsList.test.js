require('dotenv').config()
const retrieveStudentsList = require('./retrieveStudentsList')

const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() => retrieveStudentsList('64c3c0075f59a19a9d5c44ce', '64cccd94d920e3d0f2535b61'))
    .then(studentsList => console.log('students list',studentsList))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())