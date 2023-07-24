require('dotenv').config()
const mongoose = require('mongoose')
const deletePost = require('./deletePost')


mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => 
         deletePost('64be36824f741266e8b21174', '64be80d4ee7612662d6b2fb8'))
            .then(() => console.log('post deleted'))  
    .catch (error => console.error(error))
    .finally (() => mongoose.disconnect())