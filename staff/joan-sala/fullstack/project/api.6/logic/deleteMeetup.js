const { validateId } = require('./helpers/validators')
const { User, Meetup } = require('../data')

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
