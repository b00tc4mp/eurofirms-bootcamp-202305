const retrieveWorkshops = require ('./retrieveArtworks')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
.then(() => retrieveWorkshops('64d369629f77f7707c1ab22e', '64d4bb26149b653fe855a834'))
.then(workshops => console.log('workshops retrieved', workshops))
.catch(error => console.error(error))    
.finally(() => mongoose.disconnect()) 