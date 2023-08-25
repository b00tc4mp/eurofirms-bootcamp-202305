require('dotenv').config()
const { MONGOOSE_URL } = process.env
const { authenticateUser } = require('.')
const { mongoose, models: { UserModel } } = require('dat')
const { expect } = require('chai')

describe('authenticateUser', () => {
    // to do before testing
    before(() => mongoose.connect(MONGOOSE_URL))

    // global
    let name, surname, zip
    let email, password
    let userId

    // to do before each test
    beforeEach(() => {
        name = 'name' + parseInt(Math.random() * 10000)
        surname = 'surname' + parseInt(Math.random() * 10000)
        zip = String(parseInt(Math.random() * 100000))
        email = parseInt(Math.random() * 10000) + '@mail.com'
        password = 'pass' + parseInt(Math.random() * 10000)

        return UserModel.create({ name, surname, zip, email, password })
            .then(user => userId = user.id)
    })

    // to do after each test
    afterEach(() => UserModel.findByIdAndDelete(userId))

    it('succeeds on correct credentials', () =>
        authenticateUser(email, password)
            .then(_userId => expect(_userId).to.equal(userId))
    )

    it('fails on wrong password', () =>
        authenticateUser(email, password + 1)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('wrong password')
            })
    )

    it('fails on wrong email', () =>
        authenticateUser(email + 1, password)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('user does not exists')
            })
    )

    after(() => mongoose.disconnect())
})