const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')
const fs = require('fs')

// const { validators: { validateString } } = require('com')

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
            if (!user) throw new Error('User does not exist')
            const blocks = []
            const status = 0

            return PanelModel.create({ reference, owner: user._id, width, height, blocks, status })
        })
        .then(() => { })
}
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
/**
 * The function retrieves a working panel for a given user and panel ID, including the panel's blocks
 * and coordinates.
 * @param userId - The `userId` parameter is the unique identifier of the user whose panel is being
 * retrieved.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel you want to retrieve.
 * @returns a Promise that resolves to the retrieved panel object.
 */
function retrievePanelWorking(userId, panelId) {
    validateString(userId)

    return UserModel.findById(userId).lean()
        .then(user => {
            if (!user) throw new Error('User does not exist')

            return PanelModel.findById(panelId, '-__v').sort('-date').lean()
                .then(panel => {
                    if (!panel) throw new Error('Panel does not exist')
                    
                    panel.id = panel._id.toString()
                    delete panel._id
                    panel.owner = panel.owner.toString()

                    let coors = JSON.parse(fs.readFileSync('../opt/wrkpanel.txt', 'utf8'))
                    if (!(panel.id === coors.id && panel.owner === coors.user))
                        coors = JSON.parse(fs.readFileSync('../opt/wrkpanel-null.txt', 'utf8'))
                    panel.blocks = coors.blocks
                    console.log(coors)
                    console.log(panel)
                    return panel
                })
        })
}
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
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist')
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
            if (!user) throw new Error('User does not exist')
            if (!panel) throw new Error('Panel does not exist')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

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

module.exports = {
    createPanel,
    retrievePanels,
    retrievePanelOne,
    retrievePanelWorking,
    updatePanel,
    updatePanelStatusToOptimize,
    updatePanelStatusReEdit,
    deletePanel,
    createBlock,
    deleteBlock
}