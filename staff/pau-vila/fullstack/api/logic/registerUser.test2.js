require('dotenv').config
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => registerUser(users, 'Iron Man', 'iron@man.com', '1234'))
    .then(() => console.log('user created'))    
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())        
               








