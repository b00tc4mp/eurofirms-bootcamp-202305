const { loadPanel } = require('./loadPanel')
const { optimizePanel } = require('./optimizePanel')
const { savePanel } = require('./savePanel')
const { resetPanel } = require('./resetPanel')
const context = require('../../context')

const panelId = '64c7d65750067e34034f5d2d'

try {
    resetPanel(panelId)
        .then(() => {
            optimizePanel()

            savePanel(panelId)

            // console.log(context.mainPanel)
        })
        .catch((error) => console.error(error))
} catch (error) { console.error(error) }
