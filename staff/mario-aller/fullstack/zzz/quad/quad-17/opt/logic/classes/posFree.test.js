const context = require('../../context')
const { Dimension2D, Block, Panel } = require('.')
const { loadPanel } = require('../calc/loadPanel')

const panelId = '64c7d65750067e34034f5d2d'

try {
    loadPanel(panelId)
        .then(panel => {
            context.mainPanel = panel

            console.log('bl1',panel.blocks[0])
            console.log('bl2',panel.blocks[1])


            const pos = new Dimension2D(40,2)
            console.log(pos)
            console.log(panel.posFree(pos))

        })
        .catch((error) => console.error(error))
} catch (error) { console.error(error) }