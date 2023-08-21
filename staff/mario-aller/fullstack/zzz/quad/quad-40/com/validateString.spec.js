const validateString = require('./validateString')
const { expect } = require('chai')

describe('validateString', () => {

    let testString

    it('succeeds on correct credentials', () =>
        authenticateUser(email, password)
            .then(_userId => expect(_userId).to.equal(userId))
    )

    it('fails on wrong password', () =>
        authenticateUser(email, password + 1)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('Wrong password')
            })
    )

    it('fails on wrong email', () =>
        authenticateUser(email + 1, password)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('User does not exists')
            })
    )

    it('fails on invalid email (with no @)', () => {
        try {
            return authenticateUser('holamundo', password)
        } catch (error) {
            expect(error).to.be.instanceOf(Error)
            expect(error.message).to.equal('email with no @')
        }
    })

})