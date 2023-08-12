// Modules
const { models: { PanelModel } } = require('dat')

// main
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