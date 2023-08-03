const ctxCalc = require('../ctxCalc')
const { loadPanelDB } = require('./loadPanelDB')

// if (process.argv.length > 3) throw new Error('number of params wrong in set-status')

const panelId = ctxCalc.panelId
console.log(panelId)
return loadPanelDB(panelId)
    .then(pan => {
        ctxCalc.mainPanel = pan
        console.log(ctxCalc.mainPanel)
    })
