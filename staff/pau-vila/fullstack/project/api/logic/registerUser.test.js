require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => registerUser('Sito Bcn', 'sito@bcn.com', '123123123', '08001', '656893224'))
    .then(() => console.log('user created'))    
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())        
               
