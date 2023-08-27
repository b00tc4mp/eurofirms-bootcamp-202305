require('dotenv').config()
const retrieveAllTests = require('./retrieveAllTests')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/tester`)
    .then(() => retrieveAllTests('64c3c0075f59a19a9d5c44ce'))
    .then(list => console.log('List Tests', list))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
