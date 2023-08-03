const context = require('../context')
const { loadPanel } = require('./loadPanel')
const { optimizePanel } = require('./optimizePanel')

try {
    loadPanel(process.argv[2])
        .then(originPanel => {
            context.mainPanel = originPanel

            optimizePanel()
        })
        .catch((error) => console.error(error))
} catch (error) { console.error(error) }