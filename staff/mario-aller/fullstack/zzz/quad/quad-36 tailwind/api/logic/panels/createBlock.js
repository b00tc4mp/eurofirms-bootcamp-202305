const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function creates a block with the specified width and height in a panel associated with a user.
 * @param userId - The `userId` parameter is the unique identifier of the user for whom the block is
 * being created.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel where the block will
 * be created.
 * @param width - The width of the block to be created.
 * @param height - The height parameter represents the height of the block that will be created.
 * @returns a Promise.
 */
function createBlock(userId, panelId, width, height) {
    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId)])
        .then(([user, panel]) => {
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist')

            const x = -1
            const y = -1
            const orientation = 0
            const block = { x, y, width: Number(width), height: Number(height), orientation }
            panel.blocks.push(block)
            panel.status = 0
            return panel.save()
        })
        .then(() => { })

}

module.exports = createBlock