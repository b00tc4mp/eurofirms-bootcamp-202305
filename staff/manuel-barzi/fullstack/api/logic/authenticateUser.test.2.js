require('dotenv').config()

const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => authenticateUser('james@hook.com', '123123123'))
    .then(userId => console.assert(userId === '64ba5c3d4d874dc848d73d8b', 'userId should be 64ba5c3d4d874dc848d73d8b'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
