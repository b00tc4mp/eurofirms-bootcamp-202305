const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function retrieves a specific panel from the database for a given user.
 * @param userId - The `userId` parameter is the unique identifier of the user whose panel is being
 * retrieved from the database.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that you want to
 * retrieve from the database.
 * @returns a promise that resolves to the panel object retrieved from the database.
 */
function retrievePanelOne(userId, panelId) {
    validateString(userId)

    return UserModel.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error('User does not exist')

            return PanelModel.findById(panelId, '-__v').sort('-date').lean()
                .then(panel => {
                    panel.id = panel._id.toString()
                    delete panel._id
                    panel.owner = panel.owner.toString()
                    panel.blocks.forEach(block => {
                        block.id = block._id.toString()
                        delete block._id
                    })
                    return panel
                })
        })
}

module.exports = retrievePanelOne