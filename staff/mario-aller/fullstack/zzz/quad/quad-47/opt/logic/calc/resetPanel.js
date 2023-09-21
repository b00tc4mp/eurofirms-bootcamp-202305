// Modules
const { models: { PanelModel } } = require('dat')
const { Block, Panel } = require('../classes')

/**
 * The function `resetPanel` retrieves a panel by its ID, creates a new panel with the same properties,
 * updates the retrieved panel with the new panel's blocks and status, and saves the changes.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that needs to be
 * reset.
 * @returns The function `resetPanel` returns a promise that resolves to the `panelMemory` object.
 */
const resetPanel = function (panelId) {
    return PanelModel.findById(panelId)
        .then(panelRetrieved => {
            if (!panelRetrieved) throw new Error('panel does not exist')

            const blocks = panelRetrieved.blocks.map(({ width, height }) => {
                return new Block(-1n, -1n, width, height, 0)
            })

            const panelMemory = new Panel(
                panelId,
                panelRetrieved.reference,
                panelRetrieved.owner,
                panelRetrieved.width,
                panelRetrieved.height,
                blocks,
                1
            )

            panelRetrieved.blocks = panelMemory.blocks.map(block => {
                return {
                    x: block.pos.x.toNumber(),
                    y: block.pos.y.toNumber(),
                    width: block.size.x.toNumber(),
                    height: block.size.y.toNumber(),
                    orientation: block.orientation
                }
            })
            panelRetrieved.status = 1
            panelRetrieved.date = new Date()
            return panelRetrieved.save()
                .then(() => panelMemory)
        })
}

module.exports = resetPanel