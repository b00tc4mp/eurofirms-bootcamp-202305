const { User, Block, Panel } = require('../data')
const { validateString } = require('./helpers')
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
function createPanelDB(userId, reference, width, height) {
    validateString(userId)
    validateString(reference, validateString.NAME)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return User.findById(userId, '_id').lean()
        .then((user) => {
            if (!user) throw new Error('User do not exists')
            const blocks = []
            const status = 0

            return Panel.create({ reference, owner: user._id, width, height, blocks, status })
        })
        .then(() => { })
}
/**
 * The function retrieves panels from a database for a given user, including their associated blocks.
 * @param userId - The `userId` parameter is the unique identifier of the user whose panels need to be
 * retrieved from the database.
 * @returns The function `retrievePanelsDB` returns a promise that resolves to an array of panels.
 */
function retrievePanelsDB(userId) {
    validateString(userId)

    return User.findById(userId).lean()
        .then((user) => {
            if (!user) throw new Error('User do not exists')

            return Promise.all([Panel.find({ owner: user._id }, '-__v').sort('-date').lean(), Block.find({}, '-__v').sort('-date').lean()])
                .then(([panels, allBlocks]) => {
                    panels.forEach(panel => {
                        panel.id = panel._id.toString()
                        delete panel._id
                        panel.blocks = []
                        allBlocks.forEach(block => {
                            if (block.panel.toString() === panel.id) {
                                const block2 = { id: block._id.toString(), x: block.x, y: block.y, width: block.width, height: block.height, orientation: block.orientation }
                                panel.blocks.push(block2)
                            }
                        })
                    })
                    return panels
                })
        })

}
/**
 * The function retrieves a panel and its associated blocks from a database for a given user.
 * @param userId - The `userId` parameter is the unique identifier of the user whose panel is being
 * retrieved from the database.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel you want to retrieve
 * from the database.
 * @returns The function `retrievePanelOneDB` returns a promise that resolves to the panel object with
 * the specified `panelId`. The panel object includes an `id` property which is a string representation
 * of the panel's `_id` field, and an array of `blocks` that belong to the panel. Each block in the
 * array is an object with properties `id`, `x`, `y`, `
 */
function retrievePanelOneDB(userId, panelId) {
    validateString(userId)

    return User.findById(userId).lean()
        .then((user) => {
            if (!user) throw new Error('User do not exists')

            return Promise.all([Panel.findById(panelId, '-__v').sort('-date').lean(), Block.find({}, '-__v').sort('-date').lean()])
                .then(([panel, allBlocks]) => {
                    panel.id = panel._id.toString()
                    delete panel._id
                    panel.blocks = []
                    allBlocks.forEach(block => {
                        if (block.panel.toString() === panel.id) {
                            const block2 = { id: block._id.toString(), x: block.x, y: block.y, width: block.width, height: block.height, orientation: block.orientation }
                            panel.blocks.push(block2)
                        }
                    })
                    return panel
                })
        })

}

function updatePanelDB(userId, panelId, reference, width, height) {
    validateString(userId)
    validateString(panelId)
    validateString(reference, validateString.NAME)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return Promise.all([User.findById(userId, '_id').lean(), Panel.findById(panelId)])
        .then(([user, panel]) => {
            if (!user) throw new Error('User do not exists')
            if (!panel) throw new Error('Panel do not exists')
            if (panel.owner.toString() !== userId) throw new Error('You can only modify your panels!')

            panel.reference = reference
            panel.width = width
            panel.height = height
            panel.date = new Date()
            return panel.save()
        })
        .then(() => { })
}
/**
 * The function `createBlockDB` creates a new block in a panel for a specific user, with the specified
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
function createBlockDB(userId, panelId, width, height) {
    return Promise.all([User.findById(userId, '_id').lean(), Panel.findById(panelId, '_id').lean()])
        .then(([user, panel]) => {
            if (!user) throw new Error('User do not exists')
            if (!panel) throw new Error('Panel do not exists')

            const x = -1
            const y = -1
            const orientation = 0

            return Block.create({ panel: panel._id, x, y, width, height, orientation })
        })
        .then(() => { })

}

module.exports = {
    createPanelDB,
    retrievePanelsDB,
    retrievePanelOneDB,
    updatePanelDB,
    createBlockDB
}