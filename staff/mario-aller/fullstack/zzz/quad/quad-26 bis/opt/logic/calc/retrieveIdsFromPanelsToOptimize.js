// Modules
const { models: { PanelModel } } = require('dat')

const retrieveIdsFromPanelsToOptimize = function () {
    return PanelModel.find({ status: 1 }).lean()
        .then(panels => panels.map(panel => panel._id.toString()))
}

module.exports = retrieveIdsFromPanelsToOptimize
