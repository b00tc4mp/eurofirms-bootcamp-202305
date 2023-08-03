require('dotenv').config()
const mongoose = require('mongoose')
const registerUser = require('./registerUser')

mongoose.connect(process.env.MONGOOSE_URL_TEST)
    .then(() => registerUser('Smeagol2','gollum2@eriador.com','tesoro'))
    .then(() => console.log('Usuario creado'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
