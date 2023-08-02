require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => registerUser('Bermy Yava', 'bermyo@yava.com', '123123123', '17208', '625678400'))
    .then(() => console.log('user created'))    
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())        
               
