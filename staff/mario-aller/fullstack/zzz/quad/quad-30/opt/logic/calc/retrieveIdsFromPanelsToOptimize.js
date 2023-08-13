// Modules
const { models: { PanelModel } } = require('dat')

/**
 * The function retrieves the IDs of panels with a status of 1 from the PanelModel collection and
 * returns them as an array of strings.
 * @returns The function `retrieveIdsFromPanelsToOptimize` returns a promise that resolves to an array
 * of strings. Each string represents the `_id` property of a panel object that has a `status` value of
 * 1.
 */
const retrieveIdsFromPanelsToOptimize = function () {
    return PanelModel.find({ status: 1 }).lean()
        .then(panels => panels.map(panel => panel._id.toString()))
}

module.exports = retrieveIdsFromPanelsToOptimize
