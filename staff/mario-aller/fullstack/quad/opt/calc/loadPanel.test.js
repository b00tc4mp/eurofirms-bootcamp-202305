const context = require('../context')
const { loadPanel } = require('./loadPanel')

//    panelId: '64c7d65750067e34034f5d2d',
// if (process.argv.length > 3) throw new Error('number of params wrong in set-status')

const panelId = '64c7d65750067e34034f5d2d'
console.log(panelId)
return loadPanel(panelId)
    .then(panel => {
        context.mainPanel = panel
        console.log(context.mainPanel)
    })
