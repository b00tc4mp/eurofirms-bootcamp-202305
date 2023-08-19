// Modules
const { models: { PanelModel } } = require('dat')
const { Block, Panel } = require('../classes')

/**
 * The function `loadPanel` retrieves a panel by its ID and returns a new Panel object with the
 * retrieved data.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that needs to be
 * loaded.
 * @returns The loadPanel function returns a Promise that resolves to a new Panel object.
 */
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