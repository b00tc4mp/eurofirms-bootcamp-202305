require('dotenv').config()
const retrievePosts = require('./retrievePosts')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() =>{
        
        try {
            return retrievePosts
            ('64b44ed46bee5b508dad06c3')
                .then(posts => console.log('posts retrieved', posts))
                .catch(error => console.error(error))
        } catch (error){
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
