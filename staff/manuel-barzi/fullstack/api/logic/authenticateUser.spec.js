debugger

require('dotenv').config()

const authenticateUser = require('./authenticateUser')
const mongoose = require('mongoose')
const { User } = require('../data')
const { expect } = require('chai')

describe('authenticateUser', () => {
    before(() => mongoose.connect(`${process.env.MONGODB_URL}/test`))

    // prepare scenario

    let name
    let email
    let password
    let userId

    beforeEach(() => {
        name = `name-${Math.random()}`
        email = `user-${Math.random()}@mail.com`
        password = `pass-${Math.random()}`

        return User.create({ name, email, password })
            .then(user => userId = user.id)
    })

    it('succeeds on correct credentials', () =>
        authenticateUser(email, password)
            .then(_userId => expect(_userId).to.equal(userId))
    )

    it('fails on wrong password', () =>
        authenticateUser(email, password + 1)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('wrong credentials')
            })
    )

    it('fails on wrong email', () =>
        authenticateUser(email + 1, password)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('user not found')
            })
    )

    it('fails on invalid email (with no @)', () => {
        try {
            return authenticateUser('holamundo', password)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email does not have @')
        }
    })

    it('fails on invalid password (lower than 8 characters)', () => {
        try {
            return authenticateUser(email, '123')
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('password length is lower than 8')
        }
    })

    after(() => mongoose.disconnect())
})