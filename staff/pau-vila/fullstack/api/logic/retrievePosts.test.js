const retrievePosts = require ('./retrievePosts')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(() => retrievePosts('64be2d6dfdec86be08b213be', '64be2db3d3230d43650a4584'))
.then(posts => console.log('posts retrieved', posts))
.catch(error => console.error(error))    
.finally(() => mongoose.disconnect()) 