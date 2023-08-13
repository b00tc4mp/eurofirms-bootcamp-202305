const { validateId } = require('./helpers/validators')
const { User, Workshop } = require('../data')

function deleteWorkshop(userId, workshopId) {
    validateId(userId)
    validateId(workshopId)

    return Promise.all([User.findById(userId).lean(), Workshop.findById(workshopId).lean()])
        .then(([user, workshop]) => {
            if (!user) throw new Error('user not found')
            if (!workshop) throw new Error('workshop not found')
           
            if (workshop.planner.toString() !== userId) throw new Error('workshop does not belong to user')
            
            return Workshop.deleteOne({_id: workshop._id})

        })
        //.then(() => { })
        
}
module.exports = deleteWorkshop