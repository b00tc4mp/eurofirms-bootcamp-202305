// Modules
const { models: { PanelModel } } = require('dat')
const { Block, Panel } = require('../classes')

// main
const loadPanel = function (panelId) {
    return PanelModel.findById(panelId)
        .then(panelRetrieved => {
            if (!panelRetrieved) throw new Error('panel does not exist')

            const blocks = panelRetrieved.blocks.map(({ x, y, width, height, orientation }) => {
                return new Block(x, y, width, height, orientation)
            })

            return new Panel(
                panelId,
                panelRetrieved.reference,
                panelRetrieved.owner,
                panelRetrieved.width,
                panelRetrieved.height,
                blocks,
                panelRetrieved.status
            )
        })
}

module.exports = loadPanel