const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')

/**
 * The function updates the status of a panel and re-edits its blocks.
 * @param userId - The `userId` parameter is the unique identifier of the user who wants to update the
 * panel status.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that needs to be
 * updated.
 * @returns a Promise.
 */
function updatePanelStatusReEdit(userId, panelId) {
    validateString(userId)
    validateString(panelId)

    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId)])
        .then(([user, panel]) => {
            if (!user) throw new Error('user does not exist')
            if (!panel) throw new Error('panel does not exist')
            if (panel.owner.toString() !== userId) throw new Error('you can only modify your panels!')

            const { reference, owner, width, height, blocks } = panel
            blocks.forEach(block => {
                block.x = -1
                block.y = -1
                block.orientation = 0
            })
            const status = 0
            return PanelModel.create({ reference, owner, width, height, blocks, status })
        })
        .then(() => { })
}

module.exports = updatePanelStatusReEdit