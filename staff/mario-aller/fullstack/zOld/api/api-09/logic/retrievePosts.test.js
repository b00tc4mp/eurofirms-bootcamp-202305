require('dotenv').config()
const mongoose = require('mongoose')
const authenticateUser = require('./authenticateUser')
const retrievePosts = require('./retrievePosts')

mongoose.connect(process.env.MONGOOSE_URL_TEST)
    .then(() => authenticateUser('gollum@eriador.com', 'tesoro'))
    .then((userId) => retrievePosts(userId))
    .then(posts => console.log(posts))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())