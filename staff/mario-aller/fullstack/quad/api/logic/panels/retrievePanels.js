const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function retrieves panels owned by a user, converts their IDs to strings, and removes
 * unnecessary fields before returning them.
 * @param userId - The `userId` parameter is the unique identifier of a user. It is used to retrieve
 * the panels owned by that user.
 * @returns a promise that resolves to an array of panels.
 */
function retrievePanels(userId) {
    validateString(userId)

    return UserModel.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error('User does not exist')

            return PanelModel.find({ owner: user._id }, '-__v').sort('-date').lean()
                .then(panels => {
                    panels.forEach((panel => {
                        panel.id = panel._id.toString()
                        delete panel._id
                        panel.owner = panel.owner.toString()
                        panel.blocks.forEach(block => {
                            block.id = block._id.toString()
                            delete block._id
                        })
                    }))
                    return panels
                })
        })
}

module.exports = retrievePanels