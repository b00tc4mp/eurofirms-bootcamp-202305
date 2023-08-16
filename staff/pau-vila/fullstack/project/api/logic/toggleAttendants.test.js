require('dotenv').config()
const mongoose = require('mongoose')
const toggleAttendants = require('./toggleAttendants')

mongoose.connect(`${process.env.MONGODB_URL}/testornorecicla`)
  .then(() => toggleAttendants('64d369629f77f7707c1ab22e', '64db9ba3db9e8e84352d744b'))
  .then(() => console.log('toggle attendants updated'))
  .catch(error => console.error(error))
  .finally(() => mongoose.disconnect())
