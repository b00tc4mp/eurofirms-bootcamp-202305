const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function `deleteBlock` deletes a block from a panel belonging to a user, and returns a Promise.
 * @param userId - The `userId` parameter is the unique identifier of the user who wants to delete a
 * block.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that contains the
 * block you want to delete.
 * @param blockId - The `blockId` parameter is the unique identifier of the block that needs to be
 * deleted from the panel.
 * @returns a Promise.
 */
function deleteBlock(userId, panelId, blockId) {
    validateString(userId)
    validateString(panelId)
    validateString(blockId)

    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId)])
        .then(([user, panel]) => {
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist')
            const index = panel.blocks.findIndex(block => (block._id.toString() === blockId))
            if (index === - 1) throw new Error('Block does not exist')
            panel.blocks.splice(index, 1)
            panel.status = 0
            return panel.save()
        })
        .then(() => { })
}

module.exports = deleteBlock