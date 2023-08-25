require('dotenv').config()
const { MONGOOSE_URL } = process.env
const { registerUser } = require('.')
const { mongoose, models: { UserModel } } = require('dat')
const { expect } = require('chai')

describe('registerUser', () => {
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
    })

    // to do after each test
    afterEach(() => UserModel.deleteOne({ email }))

    it('succeeds on register user', () =>
        registerUser(name, surname, zip, email, password)
            .then(() => UserModel.findOne({ email }).lean())
            .then(user => expect(user.email).to.equal(email))
    )

    it('fails on duplicate user', () => {
        return registerUser(name, surname, zip, email, password)
            .then(() => {
                return registerUser(name, surname, zip, email, password)
                    .catch(error => {
                        expect(error).to.be.instanceOf(Error)
                        expect(error.message).to.equal('user exists')
                    })
            })
    })

    after(() => mongoose.disconnect())
})