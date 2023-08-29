const { User, Workshop } = require('../data')
const { validateId } = require('./helpers/validators')

function retrieveWorkshop(userId, workshopId) {
    validateId(userId)
    validateId(workshopId)

    return Promise.all([User.findById(userId).lean(), Workshop.findById(workshopId, '-date -__v').lean()])
    .then(([user, workshop]) => {
        if (!user) throw new Error('user not found')
        if (!workshop) throw new Error('workshop not found')
        
        if (workshop.planner.toString() !== userId) throw new Error('workshop does not belong to user')

        delete workshop._id
        delete workshop.planner

        return workshop
    })

}
module.exports = retrieveWorkshop