require('dotenv').config()
const createPost = require('./createPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => createPost ('64be36824f741266e8b21174', 'https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/03/escorial-madrid.jpg', 'El Escorial de Felipe II'))
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())