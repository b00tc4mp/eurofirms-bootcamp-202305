// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env
const context = require('../../context')

// Modules
const { mongoose, models: { PanelModel } } = require('dat')
const { Block, Panel } = require('../classes')

// main
const resetPanel = function (panelId) {
    return mongoose.connect(MONGOOSE_URL)
        .then(() => {
            return PanelModel.findOne({ _id: panelId })
                .then(panelRetrieved => {
                    if (!panelRetrieved) throw new Error('panel does not exist')

                    const blocks = panelRetrieved.blocks.map(({ width, height, orientation }) => {
                        return new Block(-1n, -1n, width, height, orientation)
                    })

                    const panelMemory = new Panel(
                        panelRetrieved.reference,
                        panelRetrieved.owner,
                        panelRetrieved.width,
                        panelRetrieved.height,
                        blocks,
                        1
                    )
                    context.mainPanel = panelMemory
                    context.optPanel = null
                    context.nesting = 0
                    context.times = 0
                
                    panelRetrieved.blocks = panelMemory.blocks.map(block => {
                        return {
                             x: block.pos.x.toNumber(),
                             y: block.pos.y.toNumber(),
                             width: block.size.x.toNumber(),
                             height: block.size.y.toNumber(),
                             orientation : block.orientation
                            }
                    })
                    panelRetrieved.status =1
                    panelRetrieved.date = new Date()
                    return panelRetrieved.save()
                })
        })
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect())
}

module.exports = { resetPanel }