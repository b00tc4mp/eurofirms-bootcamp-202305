// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env
const context = require('../../context')

// Modules
const { mongoose, models: { PanelModel } } = require('dat')
const { Block, Panel } = require('../classes')

// main
const savePanel = function (panelId) {
    return mongoose.connect(MONGOOSE_URL)
        .then(() => {
            return PanelModel.findOne({ _id: panelId })
                .then(panelRetrieved => {
                    if (!panelRetrieved) throw new Error('panel does not exist')

                    panelRetrieved.blocks = context.optPanel.blocks.map(block => {
                        return {
                             x: block.pos.x.toNumber(),
                             y: block.pos.y.toNumber(),
                             width: block.size.x.toNumber(),
                             height: block.size.y.toNumber(),
                             orientation : block.orientation
                            }
                    })
                    panelRetrieved.status = 5
                    return panelRetrieved.save()
                })
        })
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect())
}

module.exports = { savePanel }