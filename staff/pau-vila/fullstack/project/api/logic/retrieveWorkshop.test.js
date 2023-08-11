const retrieveWorkshop = require ('./retrieveWorkshop')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
.then(() => retrieveWorkshop('64d369629f77f7707c1ab22e', '64d4bb26149b653fe855a834'))
.then(workshop => console.log('workshop retrieved', workshop))
.catch(error => console.error(error))    
.finally(() => mongoose.disconnect()) 