require('dotenv').config()
const retrievePost = require('./retrievePost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => {
        try {
            return retrievePost('64b44ed46bee5b508dad06c3','64b44f606bee5b508dad06c5')
            .then(post => console.log('post retrieved', post))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect()) 