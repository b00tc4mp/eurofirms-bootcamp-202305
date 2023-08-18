const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function updates the status of a panel to optimize and returns a promise.
 * @param userId - The userId parameter is the unique identifier of the user whose panel status needs
 * to be updated.
 * @param panelId - The panelId parameter is the unique identifier of the panel that needs to be
 * updated.
 * @returns a Promise.
 */
function updatePanelStatusToOptimize(userId, panelId) {
    validateString(userId)
    validateString(panelId)

    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId)])
        .then(([user, panel]) => {
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

            panel.status = 1
            panel.date = new Date()
            return panel.save()
                .then(() => { })
                .catch((error) => console.error(error))
        })
}

module.exports = updatePanelStatusToOptimize