require('dotenv').config()
const retrievePost = require('./retrievePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => {
        try {
            return retrievePost('64be36824f741266e8b21174','64be3865343bc4bde4ee44ac')
            .then(post => console.log('post retrieved', post))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect()) 