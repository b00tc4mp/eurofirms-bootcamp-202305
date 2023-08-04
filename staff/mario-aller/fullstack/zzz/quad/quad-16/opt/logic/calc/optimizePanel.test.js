const { loadPanel } = require('./loadPanel')
const { optimizePanel } = require('./optimizePanel')
const { savePanel } = require('./savePanel')

const panelId = '64c7d65750067e34034f5d2d'

try {
    loadPanel(panelId)
        .then(() => {
            optimizePanel()
            savePanel(panelId)
        })
        .catch((error) => console.error(error))
} catch (error) { console.error(error) }
