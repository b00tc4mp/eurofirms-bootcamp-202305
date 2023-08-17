require('dotenv').config()

const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')
const { User } = require('../data')

const name = `name-${Math.random()}`
const email = `user-${Math.random()}@mail.com`
const password = `pass-${Math.random()}`
let userId = null

mongoose.connect(`${process.env.MONGODB_URL}/test`)
    // prepare scenario
    .then(() =>
        User.create({ name, email, password })
            .then(user => userId = user.id)
    )
    // CASE happy
    .then(() =>
        authenticateUser(email, password)
            .then(_userId => console.assert(_userId === userId, `_userId should be ${userId}`))
    )
    // CASE unhappy: wrong password
    .then(() =>
        authenticateUser(email, password + 1)
            .catch(error => {
                console.assert(error instanceof Error, 'should throw an error of type Error')
                console.assert(error.message === 'wrong credentials', 'should have correct fail message (wrong credentials)')
            })
    )
    // CASE unhappy: wrong email
    .then(() =>
        authenticateUser(email + 1, password)
            .catch(error => {
                console.assert(error instanceof Error, 'should throw an error of type Error')
                console.assert(error.message === 'user not found', 'should have correct fail message (user not found)')
            })
    )
    // CASE unhappy: invalid email (no @)
    .then(() => {
        try {
            return authenticateUser('holamundo', password)
        } catch (error) {
            console.assert(error instanceof Error, 'should throw an error of type Error')
            console.assert(error.message === 'email does not have @', 'should have correct fail message (email does not have @)')
        }
    })
    // CASE unhappy: invalid password (lower than 8 characters)
    .then(() => {
        try {
            return authenticateUser(email, '123')
        } catch (error) {
            console.assert(error instanceof Error, 'should throw an error of type Error')
            console.assert(error.message === 'password length is lower than 8', 'should have correct fail message (password length is lower than 8)')
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
