require('dotenv').config()
const mongoose = require('mongoose')
const deletePost = require('./deletePost')


mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => {
        try { return deletePost('64be36824f741266e8b21174', '64be38b915926f4d4fccec8b')
            .then(() => console.log('post deleted'))
            .catch(error => console.error(error))
        } catch (error){
            console.error(error)    
        }
    })
    .catch (error => console.error(error))
    .finally (() => mongoose.disconnect())