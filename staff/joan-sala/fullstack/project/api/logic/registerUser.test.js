require('dotenv').config()

const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser('Peter Pan', 'peter@pan.com', '123123123', 'https://cdn.pixabay.com/photo/2023/06/21/16/26/warnemunde-8079731_1280.jpg'))
    .then(() => console.log('User create'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

