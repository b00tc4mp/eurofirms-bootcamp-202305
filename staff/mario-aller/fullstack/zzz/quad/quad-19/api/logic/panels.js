const { models: { UserModel, PanelModel } } = require('dat')
const { validators: { validateString } } = require('com')
/**
 * The function creates a panel with the specified user ID, reference, width, and height, after
 * validating the input parameters.
 * @param userId - The `userId` parameter is the unique identifier of the user for whom the panel is
 * being created.
 * @param reference - The "reference" parameter is a string that represents the reference of the panel.
 * It is used to uniquely identify the panel.
 * @param width - The width parameter is the width of the panel in pixels.
 * @param height - The `height` parameter is the desired height of the panel in pixels.
 * @returns a promise.
 */
function createPanel(userId, reference, width, height) {
    validateString(userId)
    validateString(reference, validateString.NAME)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return UserModel.findById(userId, '_id').lean()
        .then((user) => {
            if (!user) throw new Error('User does not exist')
            const blocks = []
            const status = 0

            return PanelModel.create({ reference, owner: user._id, width, height, blocks, status })
        })
        .then(() => { })
}

/**
 * The function retrieves panels from a database based on a user's ID.
 * @param userId - The `userId` parameter is the unique identifier of the user whose panels need to be
 * retrieved from the database.
 * @returns a promise that resolves to an array of panels owned by the user with the specified userId.
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
                        panel.blocks.forEach(block => {
                            block.id = block._id.toString()
                            delete block._id
                        })
                    }))
                    return panels
                })
        })
}

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
                    panel.blocks.forEach(block => {
                        block.id = block._id.toString()
                        delete block._id
                    })
                    return panel
                })
        })

}
/**
 * The function `updatePanel` updates the reference, width, and height of a panel in a database,
 * after validating the input parameters and checking if the user has permission to modify the panel.
 * @param userId - The `userId` parameter is the unique identifier of the user who owns the panel. It
 * is used to find the user in the database and validate their ownership of the panel before making any
 * modifications.
 * @param panelId - The panelId parameter is the unique identifier of the panel that needs to be
 * updated in the database.
 * @param reference - The reference parameter is a string that represents the reference of the panel.
 * It could be a name, code, or any other identifier that helps identify the panel.
 * @param width - The "width" parameter represents the width of the panel in pixels.
 * @param height - The `height` parameter represents the height of the panel.
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
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist  ')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

            panel.reference = reference
            panel.width = width
            panel.height = height
            panel.status = 0
            panel.date = new Date()
            return panel.save()
        })
        .then(() => { })
}
/**
 * The function updates the status of a panel to optimize and returns a promise.
 * @param userId - The `userId` parameter is the unique identifier of the user whose panel status needs
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
            if (!panel) throw new Error('Panel does not exist  ')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

            panel.status = 1
            panel.date = new Date()
            return panel.save()
        })
        .then(() => { })
}
/**
 * The function `updatePanelStatusReEdit` updates the status of a panel to 0 and saves the current
 * date, but only if the user is the owner of the panel.
 * @param userId - The `userId` parameter is the unique identifier of the user who wants to update the
 * panel status.
 * @param panelId - The panelId parameter is the unique identifier of the panel that needs to be
 * updated.
 * @returns a Promise.
 */
function updatePanelStatusReEdit(userId, panelId) {
    validateString(userId)
    validateString(panelId)

    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId)])
        .then(([user, panel]) => {
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist  ')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

            panel.status = 0
            panel.date = new Date()
            return panel.save()
        })
        .then(() => { })
}
/**
 * The function `deletePanel` deletes a panel from the database if the user is the owner of the
 * panel.
 * @param userId - The userId parameter is the unique identifier of the user whose panel needs to be
 * deleted.
 * @param panelId - The panelId parameter is the unique identifier of the panel that you want to delete
 * from the database.
 * @returns a Promise that resolves to the result of deleting the panel from the database.
 */
function deletePanel(userId, panelId) {
    validateString(userId)
    validateString(panelId)

    return Promise.all([UserModel.findById(userId, '_id').lean(), PanelModel.findById(panelId).lean()])
        .then(([user, panel]) => {
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist  ')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

            return PanelModel.deleteOne({ _id: panel._id })
        })
}
/**
 * The function `createBlock` creates a new block in a panel for a specific user, with the specified
 * width and height.
 * @param userId - The `userId` parameter is the ID of the user for whom the block is being created.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel in which the block
 * will be created.
 * @param width - The width parameter represents the width of the block that will be created in the
 * database.
 * @param height - The height parameter represents the height of the block that will be created in the
 * database.
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
module.exports = {
    createPanel,
    retrievePanels,
    retrievePanelOne,
    updatePanel,
    updatePanelStatusToOptimize,
    updatePanelStatusReEdit,
    deletePanel,
    createBlock,
    deleteBlock
}