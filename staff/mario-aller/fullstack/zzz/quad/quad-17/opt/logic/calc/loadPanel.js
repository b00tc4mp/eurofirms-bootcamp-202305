// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env
const context = require('../../context')

// Modules
const { mongoose, models: { PanelModel } } = require('dat')
const { Block, Panel } = require('../classes')

// main
const loadPanel = function (panelId) {
    return mongoose.connect(MONGOOSE_URL)
        .then(() => {
            return PanelModel.findOne({ _id: panelId })
                .then(panelRetrieved => {
                    if (!panelRetrieved) throw new Error('panel does not exist')

                    const blocks = panelRetrieved.blocks.map(({ x, y, width, height, orientation }) => {
                        return new Block(x, y, width, height, orientation)
                    })

                    const panelMemory = new Panel(
                        panelRetrieved.reference,
                        panelRetrieved.owner,
                        panelRetrieved.width,
                        panelRetrieved.height,
                        blocks,
                        panelRetrieved.status
                    )
                    context.mainPanel = panelMemory
                })
        })
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect())
}

module.exports = { loadPanel }