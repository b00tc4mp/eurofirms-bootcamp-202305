const { models: { UserModel, PanelModel } } = require('dat')
const { validateString } = require('com')
const fs = require('fs')

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
            if (!user) throw new Error('user does not exist')

            return PanelModel.findById(panelId, '-__v').sort('-date').lean()
                .then(panel => {
                    if (!panel) throw new Error('panel does not exist')
                    
                    panel.id = panel._id.toString()
                    delete panel._id
                    panel.owner = panel.owner.toString()

                    let coors = JSON.parse(fs.readFileSync('../opt/wrkpanel.txt', 'utf8'))
                    if (!(panel.id === coors.id && panel.owner === coors.user))
                        coors = JSON.parse(fs.readFileSync('../opt/wrkpanel-null.txt', 'utf8'))
                    panel.blocks = coors.blocks
                    return panel
                })
        })
}

module.exports = retrievePanelWorking