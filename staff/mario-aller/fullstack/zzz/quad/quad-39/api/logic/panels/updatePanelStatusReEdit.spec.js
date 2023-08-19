require('dotenv').config()
const { MONGOOSE_URL } = process.env
const { updatePanelStatusReEdit } = require('.')
const { mongoose, models: { UserModel, PanelModel } } = require('dat')
const { expect } = require('chai')

debugger
describe('updatePanelStatusReEdit', () => {
    // to do before testing
    before(() => mongoose.connect(MONGOOSE_URL))

    // global
    let name, surname, zip
    let email, password, email2
    let userId, panelId, blockId, userId2
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
        width = String(parseInt(Math.random() * 1000) + 100)
        height = String(parseInt(Math.random() * 1000) + 100)
        blocks = []
        status = 9
        email2 = email.slice(1)

        return UserModel.create({ name, surname, zip, email, password })
            .then(user => {
                userId = user.id
                panel = { reference, owner: userId, width, height, blocks, status }
                return PanelModel.create(panel)
                    .then(() => PanelModel.findOne({ status }))
                    .then(panel => {
                        panelId = panel._id.toString()
                        const block = { x: 4, y: 5, width: 34, height: 78, orientation: 0 }
                        panel.blocks.push(block)
                        return panel.save()
                    })
                    .then(() => PanelModel.findById(panelId))
                    .then(panel => blockId = panel.blocks[0]._id.toString())
            })
    })

    // to do after each test
    afterEach(() => {
        return PanelModel.findByIdAndDelete(panelId)
            .then(() => UserModel.findByIdAndDelete(userId))
    })

    it('succeeds on updatePanelStatusReEdit', () =>
        updatePanelStatusReEdit(userId, panelId)
            .then(() => PanelModel.find({ reference }).sort('-date').limit(1))
            .then(([panel]) => {
                expect(panel.status).to.equal(0)
                return PanelModel.findByIdAndDelete(panel.id)
            })
    )
    it('fails on user does not exist', () =>
        updatePanelStatusReEdit(userId.slice(6) + 'ffffff', panelId)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('user does not exist')
            })
    )
    it('fails on panel does not exist', () =>
        updatePanelStatusReEdit(userId, panelId.slice(6) + 'ffffff')
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('panel does not exist')
            })
    )
    it('fails on user cannot update', () => UserModel.create({ name, surname, zip, email: email2, password })
        .then(() => UserModel.findOne({ email: email2 }))
        .then(user => {
            userId2 = user.id
            return updatePanelStatusReEdit(userId2, panelId)
                .catch(error => {
                    expect(error).to.be.instanceOf(Error)
                    expect(error.message).to.equal('you can only modify your panels!')
                    return UserModel.findByIdAndDelete(userId2)
                })
        }))

    after(() => mongoose.disconnect())
})