const { validateId } = require('./helpers/validators')
const { User, Workshop } = require('../data')

function retrieveWorkshops(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            return Workshop.find({}, '-__v').populate('planner', 'name').lean()
                .then(workshops => {

                    workshops.forEach(workshop => {
                        workshop.id = workshop._id.toString()
                        delete workshop._id

                        const { planner } = workshop

                        if (planner._id) {
                            planner.id = planner._id.toString()
                            delete planner._id
                        }

                    })

                    return workshops
                })
        })
}

module.exports = retrieveWorkshops