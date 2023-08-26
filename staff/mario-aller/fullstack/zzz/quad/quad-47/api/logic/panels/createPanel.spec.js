require('dotenv').config()
const { MONGOOSE_URL } = process.env
const { createPanel } = require('.')
const { mongoose, models: { UserModel, PanelModel } } = require('dat')
const { expect } = require('chai')

debugger
describe('createPanel', () => {
    // to do before testing
    before(() => mongoose.connect(MONGOOSE_URL))

    // global
    let name, surname, zip
    let email, password
    let userId, panelId
    let reference, width, height
    let panel, blocks, status

    // to do before each test
    beforeEach(() => {
        name = 'name' + parseInt(Math.random() * 10000)
        surname = 'surname' + parseInt(Math.random() * 10000)
        zip = String(parseInt(Math.random() * 100000))
        email = parseInt(Math.random() * 10000) + '@mail.com'
        password = 'pass' + parseInt(Math.random() * 10000)
        reference = 'ref' + parseInt(Math.random() * 1000000)
        width = String(parseInt(Math.random() * 1000))
        height = String(parseInt(Math.random() * 1000))

        return UserModel.create({ name, surname, zip, email, password })
            .then(user => {
                userId = user.id
            })
    })

    // to do after each test
    afterEach(() => UserModel.findByIdAndDelete(userId))

    it('succeeds on createPanel', () =>
        createPanel(userId, reference, width, height)
            .then(() => PanelModel.findOne({ reference })
                .then(panel => {
                    expect(panel.reference).to.equal(reference)
                    return PanelModel.findByIdAndDelete(panel.id)
                })))

    it('fails on user does not exist', () =>
        createPanel(userId.slice(6) + 'ffffff', reference, width, height)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('user does not exist')
            }))

    after(() => mongoose.disconnect())
})