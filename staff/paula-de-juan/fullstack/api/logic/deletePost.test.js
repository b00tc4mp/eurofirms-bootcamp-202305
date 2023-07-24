require('dotenv').config()
const mongoose = require('mongoose')
const deletePost = require('./deletePost')


mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => {
        try { return deletePost('64a53972a7376ccc8e8f1f59', '64a55846e3767fed249efc23')
            .then(() => console.log('post deleted'))
            .catch(error => console.error(error))
        } catch (error){
            console.error(error)    
        }
    })
    .catch (error => console.error(error))
    .finally (() => mongoose.disconnect())