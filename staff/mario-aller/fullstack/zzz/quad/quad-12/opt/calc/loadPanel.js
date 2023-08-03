// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env

// Modules
const mongoose = require('mongoose')

// User defined modules
const { PanelModel } = require('../data')
const { Block, Panel } = require('../logic/classes')

// main
const loadPanel = function (panelId) {
    return mongoose.connect(MONGOOSE_URL)
        .then(() => {
            return PanelModel.findOne({ _id: panelId })
                .then(panelDB => {
                    if (!panelDB) throw new Error('panel does not exist')

                    const blocks = panelDB.blocks.map(({ x, y, width, height, orientation }) => {
                        return new Block(x, y, width, height, orientation)
                    })
                    const panelMemory = new Panel(
                        panelDB.reference,
                        panelDB.owner,
                        panelDB.width,
                        panelDB.height,
                        blocks,
                        panelDB.status
                    )
                    return panelMemory
                })
        })
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect())
}

module.exports = { loadPanel }