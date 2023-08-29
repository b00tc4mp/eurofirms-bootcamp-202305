require('dotenv').config()
const deleteWorkshop = require('./deleteWorkshop')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
    .then(() => deleteWorkshop('64d369629f77f7707c1ab22e', '64d3b0b40b83e088b8175629'))
    .then(() => console.log('workshop deleted'))
    .catch(error => console.error(error))    
    .finally(() => mongoose.disconnect())