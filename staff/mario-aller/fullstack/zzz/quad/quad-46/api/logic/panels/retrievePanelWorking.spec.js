require('dotenv').config()
const { MONGOOSE_URL } = process.env
const { retrievePanelWorking } = require('.')
const { mongoose, models: { UserModel, PanelModel } } = require('dat')
const { expect } = require('chai')
const fs = require('fs')

debugger
describe('retrievePanelWorking', () => {
    // to do before testing
    before(() => mongoose.connect(MONGOOSE_URL))

    // global
    let name, surname, zip
    let email, password
    let userId, panelId, blockId
    let reference, width, height
    let panel, blocks, status
    let data

    // to do before each test
    beforeEach(() => {
        name = 'name' + parseInt(Math.random() * 10000)
        surname = 'surname' + parseInt(Math.random() * 10000)
        zip = String(parseInt(Math.random() * 100000))
        email = parseInt(Math.random() * 10000) + '@mail.com'
        password = 'pass' + parseInt(Math.random() * 10000)
        reference = 'ref' + parseInt(Math.random() * 1000000)
        width = parseInt(Math.random() * 1000) + 100
        height = parseInt(Math.random() * 1000) + 100
        blocks = []
        status = 9

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
                    .then(() => PanelModel.findOne({ status }))
                    .then(panel => blockId = panel.blocks[0]._id.toString())
            })
    })

    // to do after each test
    afterEach(() => {
        return PanelModel.findByIdAndDelete(panelId)
            .then(() => UserModel.findByIdAndDelete(userId))
    })
    it('succeeds on exists workingPanel', () => {
        data = JSON.stringify({id: panelId, user: userId, blocks:[]})
        fs.writeFileSync(`../opt/wrkpanel.txt`, data)
        return retrievePanelWorking(userId, panelId)
            .then(panel => expect(panel.id).to.equal(panelId))
    })
    it('succeeds on does not exist workingPanel', () => {
        data = `{"id":null,"user":null,"blocks":[]}`
        fs.writeFileSync(`../opt/wrkpanel.txt`, data)
        return retrievePanelWorking(userId, panelId)
            .then(panel => expect(panel.id).to.equal(panelId))
    })
    it('fails on user does not exist', () =>
        retrievePanelWorking(userId.slice(6) + 'ffffff', panelId)
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('user does not exist')
            }))
    it('fails on panel does not exist', () =>
        retrievePanelWorking(userId, panelId.slice(6) + 'ffffff')
            .catch(error => {
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal('panel does not exist')
            }))

            after(() => {
        data = `{"id":null,"user":null,"blocks":[]}`
        fs.writeFileSync(`../opt/wrkpanel.txt`, data)
        mongoose.disconnect()
    })
})