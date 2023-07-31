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
                        panel.blocks = []
                        allBlocks.forEach(block => {
                            if (block.panel.toString() === panel.id) {
                                const block2 = { x: block.x, y: block.y, width: block.width, height:block.height, orientation: block.orientation }
                                panel.blocks.push(block2)
                            }
                        })
                    })
                    return panels
                })
        })

}

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
module.exports = { createPanelDB, retrievePanelsDB, createBlockDB }