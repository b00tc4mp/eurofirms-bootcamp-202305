const { User, Workshop } = require('../data')
const { validateId } = require('./helpers/validators')

function toggleAttendants(userId, workshopId) {
    validateId(userId)
    validateId(workshopId)

    return Promise.all([User.findById(userId), Workshop.findById(workshopId)])
        .then(([user, workshop]) => {
            
            if (!user) throw new Error('user not found')
            if (!workshop) throw new Error('workshop not found')

            const index = workshop.attendants.indexOf(userId)
            if (index === -1)
                workshop.attendants.push(user._id)
            else
                workshop.attendants.splice(index, 1)

            return workshop.save()
        })
}

module.exports = toggleAttendants


