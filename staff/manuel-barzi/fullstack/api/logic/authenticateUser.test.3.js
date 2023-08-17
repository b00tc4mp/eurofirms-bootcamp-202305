require('dotenv').config()

const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')
const { User } = require('../data')

const name = `name-${Math.random()}`
const email = `user-${Math.random()}@mail.com`
const password = `pass-${Math.random()}`
let userId = null

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    .then(() => User.create({ name, email, password }))
    .then(user => userId = user.id)
    .then(() => authenticateUser(email, password))
    .then(_userId => console.assert(_userId === userId, `_userId should be ${userId}`))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
