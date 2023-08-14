// Modules
const { models: { PanelModel } } = require('dat')

/**
 * The function `savePanel` takes a panel object, retrieves the corresponding panel from the database,
 * updates its blocks and status, and saves it.
 * @param panel - The `panel` parameter is an object that represents a panel. It has the following
 * properties:
 * @returns The function `savePanel` returns a promise that resolves to the updated `panelRetrieved`
 * object after saving it.
 */
const savePanel = function (panel) {
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
            panelRetrieved.status = 2
            panelRetrieved.date = new Date()
            return panelRetrieved.save()
        })
}

module.exports = savePanel