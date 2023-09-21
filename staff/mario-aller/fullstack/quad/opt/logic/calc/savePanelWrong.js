// Modules
const { models: { PanelModel } } = require('dat')

/**
 * The function `savePanelWrong` retrieves a panel by its ID, updates its blocks and status, and saves
 * the changes.
 * @param panel - The `panel` parameter is an object that represents a panel. It has the following
 * properties:
 * @returns The function `savePanelWrong` returns a promise that resolves to the updated
 * `panelRetrieved` object after saving it.
 */
const savePanelWrong = function (panel) {
    console.log(panel.id)
    return PanelModel.findById(panel.id)
        .then(panelRetrieved => {
            if (!panelRetrieved) throw new Error('panel does not exist')

            panelRetrieved.blocks = panel.blocks.map(block => {
                return {
                    x: block.pos.x.toNumber(),
                    y: block.pos.y.toNumber(),
                    width: block.size.x.toNumber(),
                    height: block.size.y.toNumber(),
                    orientation: block.orientation
                }
            })
            panelRetrieved.status = 3
            panelRetrieved.date = new Date()
            return panelRetrieved.save()
        })
}

module.exports = savePanelWrong