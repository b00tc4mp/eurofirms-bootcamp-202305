const ctxCalc = require('../ctxCalc')
const { loadPanelDB } = require('./loadPanelDB')
const { optimizePanel } = require('./optimizePanel')
return loadPanelDB(ctxCalc.panelId)
    .then(panelOrg => {
        ctxCalc.mainPanel = panelOrg

        optimizePanel()
    })