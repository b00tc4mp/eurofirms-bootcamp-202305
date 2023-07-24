/* El código está escrito en JavaScript y utiliza el entorno de tiempo de ejecución de Node.js. */
require('dotenv').config()

const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrieveUser('64be2ff2ab1c7f4a76ddc509'))
    .then(user => console.log('user retrieved', user))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())