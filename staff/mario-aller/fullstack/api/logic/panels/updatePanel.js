const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function updates a panel's reference, width, height, status, and date if the user is the owner
 * of the panel.
 * @param userId - The `userId` parameter is the unique identifier of the user who owns the panel.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that needs to be
 * updated.
 * @param reference - The `reference` parameter is a string that represents the reference of the panel.
 * It could be a name, title, or any other identifier that helps identify the panel.
 * @param width - The "width" parameter represents the width of the panel in pixels.
 * @param height - The `height` parameter in the `updatePanel` function represents the desired height
 * of the panel. It is expected to be a string containing an integer value.
 * @returns a Promise.
 */
function updatePanel(userId, panelId, reference, width, height) {
    validateString(userId)
    validateString(panelId)
    validateString(reference, validateString.NAME)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId)])
        .then(([user, panel]) => {
            if (!user) throw new Error('user does not exist')
            if (!panel) throw new Error('panel does not exist')
            if (panel.owner.toString() !== userId) throw new Error('you can only modify your panels!')

            panel.reference = reference
            panel.width = width
            panel.height = height
            panel.status = 0
            panel.date = new Date()
            return panel.save()
        })
        .then(() => { })
}
module.exports = updatePanel