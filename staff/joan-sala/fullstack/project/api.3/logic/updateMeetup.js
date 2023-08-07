const { validateId, validateText, validateUrl } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function updateMeetup(userId, meetupId, image, text) {
    validateId(userId)
    validateId(meetupId)
    validateUrl(image)
    validateText(text)

    return Promise.all([User.findById(userId).lean(), meetup.findById(meetupId)])
        .then(([user, meetup]) => {
            if (!user) throw new Error('User not found')
            if (!meetup) throw new Error('Post not found')

            if (meetup.name.toString() !== userId) throw new Error('meetup does not belong to user')
            meetup.image = image
            meetup.text = text
            
            return meetup.save()
        })
        .then(()=> {})
}
module.exports = updateMeetup