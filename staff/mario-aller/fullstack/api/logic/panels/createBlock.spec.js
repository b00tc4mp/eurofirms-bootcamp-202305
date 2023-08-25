require('dotenv').config()
const { MONGOOSE_URL } = process.env
const { createBlock } = require('.')
const { mongoose, models: { UserModel, PanelModel } } = require('dat')
const { expect } = require('chai')

debugger
describe('createBlock', () => {
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
        width = parseInt(Math.random() * 1000)
        height = parseInt(Math.random() * 1000)
        blocks = []
        status = 9
        
        return UserModel.create({ name, surname, zip, email, password })
            .then(user => {
                userId = user.id
                panel = { reference, owner: userId, width, height, blocks, status }
                return PanelModel.create(panel)
                    .then(() => PanelModel.findOne({ status }))
                    .then(panel => panelId = panel._id.toString())
            })
    })

    // to do after each test
    afterEach(() => {
        return PanelModel.findByIdAndDelete(panelId)
            .then(() => UserModel.findByIdAndDelete(userId))
    })

    it('succeeds on createBlock', () =>
        createBlock(userId, panelId, 1234, 5678)
            .then(() => PanelModel.findById(panelId))
            .then(panel => {
                expect(panel.blocks[0].width).to.equal(1234)
                expect(panel.blocks[0].height).to.equal(5678)
            })
    )

    it('fails on user does not exist', () =>
        createBlock(userId.slice(6) + 'ffffff', panelId, 1234, 5678)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('user does not exist')
            })
    )

    it('fails on panel does not exist', () =>
        createBlock(userId, panelId.slice(6) + 'ffffff', 1234, 5678)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('panel does not exist')
            })
    )

    after(() => mongoose.disconnect())
})