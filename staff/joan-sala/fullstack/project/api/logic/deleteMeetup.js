const { validateId } = require('./helpers/validators')
const { User, Meetup } = require('../data')

/**
 * The function `deleteMeetup` deletes a meetup if the user is the author of the meetup.
 * @param userId - The userId parameter represents the ID of the user who wants to delete the meetup.
 * @param meetupId - The ID of the meetup that needs to be deleted.
 * @returns a Promise.
 */
function deleteMeetup(userId, meetupId) {
    validateId(userId)
    validateId(meetupId)
    
    return Promise.all([User.findById(userId).lean(), 
        Meetup.findById(meetupId).lean()])
        .then(([user, meetup]) => {
            if (!user) throw new Error('User not found')
            if(!meetup) throw new Error('Meetup not found')

            if(meetup.author.toString() !== userId) throw Error('Meetup does not belong to use')
            return Meetup.deleteOne({ _id: meetup._id })
        })
        .then(() => {})
}
module.exports = deleteMeetup
