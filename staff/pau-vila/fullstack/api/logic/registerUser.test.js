require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser('Viuda Negra', 'viuda@negra.com', '123123123'))
    .then(() => console.log('user created'))    
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())        
               
    
    