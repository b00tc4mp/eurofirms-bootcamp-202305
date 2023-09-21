const loadPanel = require('./loadPanel')
const optimizePanel = require('./optimizePanel')
const savePanel = require('./savePanel')
const savePanelWrong = require('./savePanelWrong')
const resetPanel = require('./resetPanel')
const retrieveIdsFromPanelsToOptimize
    = require('./retrieveIdsFromPanelsToOptimize')

module.exports = {
    loadPanel,
    optimizePanel,
    savePanel,
    savePanelWrong,
    resetPanel,
    retrieveIdsFromPanelsToOptimize
}