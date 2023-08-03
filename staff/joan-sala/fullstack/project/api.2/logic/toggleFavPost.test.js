require('dotenv').config()

const toggleFavPost = require('./toggleFavPost')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/test`)
    .then(() => toggleFavPost('64be2f24a9e3d0ab0f7b8c77', '64be364f4a54efd5ff91686d'))
    .then(posts => console.log('Toggle Fav Post Ok'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())