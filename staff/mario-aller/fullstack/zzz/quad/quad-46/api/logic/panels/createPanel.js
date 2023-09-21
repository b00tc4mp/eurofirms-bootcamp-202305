    const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function creates a panel with the specified parameters for a user, after validating the input.
 * @param userId - The `userId` parameter is the unique identifier of the user for whom the panel is
 * being created.
 * @param reference - The "reference" parameter is a string that represents a reference or identifier
 * for the panel being created. It could be a unique name or code that helps identify the panel.
 * @param width - The width parameter represents the width of the panel in pixels.
 * @param height - The `height` parameter represents the height of the panel that will be created.
 * @returns a promise.
 */
function createPanel(userId, reference, width, height) {
    validateString(userId)
    validateString(reference, validateString.NAME)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return UserModel.findById(userId, '_id').lean()
        .then((user) => {
            if (!user) throw new Error('user does not exist')
            const blocks = []
            const status = 0

            return PanelModel.create({ reference, owner: user._id, width, height, blocks, status })
        })
        .then(() => { })
}

module.exports = createPanel