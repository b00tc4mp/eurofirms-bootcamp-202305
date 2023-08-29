require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => registerUser('Cris Carayo', 'cris@carayo.com', '123123123', '27004', '665427923'))
    .then(() => console.log('user created'))    
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())        
               
