require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser('Isabel I', 'isabel@catolica.com', 'americamola'))
                .then(() => console.log('user created'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())