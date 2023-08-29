require('dotenv').config()
const { mongo, default: mongoose } = require('mongoose')
const registerUser = require('./registerUser')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser('pau13', 'pau@13.com', '123123123'))
    .then(() => console.log('User Registered!'))
    .catch(err => console.error(err))
    .finally(() => mongoose.disconnect())