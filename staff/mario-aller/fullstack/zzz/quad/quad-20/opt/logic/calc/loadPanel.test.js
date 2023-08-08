const context = require('../../context')
const { loadPanel } = require('./loadPanel')

const panelId = '64c7d65750067e34034f5d2d'

console.log(panelId)

try {
    loadPanel(panelId)
        .then(panel => {
            context.mainPanel = panel
            console.log(context.mainPanel)
        })
        .catch((error) => console.error(error))
} catch (error) { console.error(error) }
