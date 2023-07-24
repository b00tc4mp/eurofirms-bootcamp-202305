require('dotenv').config()
const mongoose = require('mongoose')
const authenticateUser = require('./authenticateUser')

mongoose.connect(process.env.MONGOOSE_URL_TEST)
    .then(() => authenticateUser('gollum@eriador.com', 'tesoro'))
    .then((userId) => console.log(userId))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())