const context = require('../context')
const { loadPanel } = require('./loadPanel')
const { optimizePanel } = require('./optimizePanel')

const panelId = '64c7d65750067e34034f5d2d'

console.log(panelId)

try {
    loadPanel(panelId)
        .then(panel => {
            context.mainPanel = panel

            optimizePanel()
        })
        .catch((error) => console.error(error))
} catch (error) { console.error(error) }
