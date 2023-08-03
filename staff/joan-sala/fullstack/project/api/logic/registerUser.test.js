require('dotenv').config()

const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testMeetupBikers`)
    .then(() => registerUser('Pim2 Pam',
        'pim2@pam.com',
        '123123123',
        'https://www.vectorstock.com/royalty-free-vector/man-person-character-a…'))
    .then(() => console.log('User create'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

