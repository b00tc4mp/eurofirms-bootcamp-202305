// Enviroment
require('dotenv').config()
const { MONGOOSE_URL } = process.env

// Modules
const mongoose = require('mongoose')

// User defined modules
const { PanelModel } = require('../../data')
const { Block, Panel } = require('../classes')

// main
const loadPanel = function (panelId) {
    return mongoose.connect(MONGOOSE_URL)
        .then(() => {
            return PanelModel.findOne({ _id: panelId })
                .then(panelRetreived => {
                    if (!panelRetreived) throw new Error('panel does not exist')

                    const blocks = panelRetreived.blocks.map(({ x, y, width, height, orientation }) => {
                        return new Block(x, y, width, height, orientation)
                    })
                    
                    const panelMemory = new Panel(
                        panelRetreived.reference,
                        panelRetreived.owner,
                        panelRetreived.width,
                        panelRetreived.height,
                        blocks,
                        panelRetreived.status
                    )
                    return panelMemory
                })
        })
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect())
}

module.exports = { loadPanel }