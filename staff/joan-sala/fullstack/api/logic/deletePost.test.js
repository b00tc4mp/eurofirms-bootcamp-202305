require('dotenv').config()

const deletePost = require('./deletePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => deletePost('64be2f24a9e3d0ab0f7b8c77', '64be2fc365673276c7b2b465'))
    .then(() => console.log('Post deleted'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
    
            