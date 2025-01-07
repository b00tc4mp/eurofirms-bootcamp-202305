require('dotenv').config()

const updatePost = require('./updatePost')
const mongoose = require('mongoose')

const {MONGODB_URL} = process.env 

mongoose.connect(`${MONGODB_URL}/test`)
.then(() => updatePost('64ba8ba842cda8317c8989d8', '64baa7c465624485ca989a65', 
    'https://hips.hearstapps.com/hmg-prod/images/rick-and-morty-image-1662104014.jpg?crop=0.316xw:0.562xh;0.352xw,0.168xh&resize=980:*',
    'el nuevo rick'))    
.then(()=> console.log('post updated'))
.catch(error => console.error(error))
.finally(()=> mongoose.disconnect())