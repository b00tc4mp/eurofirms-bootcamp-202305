const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function `deletePanel` deletes a panel if the user is the owner of the panel.
 * @param userId - The `userId` parameter is the unique identifier of the user who wants to delete the
 * panel.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that you want to
 * delete.
 * @returns a Promise that resolves to the result of the `PanelModel.deleteOne()` method.
 */
function deletePanel(userId, panelId) {
    validateString(userId)
    validateString(panelId)

    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId).lean()])
        .then(([user, panel]) => {
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

            return PanelModel.deleteOne({ _id: panel._id })
        })
}

module.exports = deletePanel