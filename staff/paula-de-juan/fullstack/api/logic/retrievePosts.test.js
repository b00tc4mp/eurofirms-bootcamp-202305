require('dotenv').config()
const retrievePosts = require('./retrievePosts')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => retrievePosts('64be36824f741266e8b21174'))
                .then(posts => console.log('posts retrieved', posts))
                .catch(error => console.error(error))
    
    .finally(() => mongoose.disconnect())
