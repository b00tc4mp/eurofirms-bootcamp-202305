const { validateId, validateText, validateUrl } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function updateMeetup(userId, meetupId, image, text, type, adress) {
    validateId(userId)
    validateId(meetupId)
    validateUrl(image)
    validateText(text)
    validateText(type)
    validateText(adress)

    return Promise.all([User.findById(userId).lean(), Meetup.findById(meetupId)])
        .then(([user, meetup]) => {
            if (!user) throw new Error('User not found')
            if (!meetup) throw new Error('Meetup not found')

            if (meetup.author.toString() !== userId) throw new Error('meetup does not belong to user')
            meetup.image = image
            meetup.text = text
            meetup.type = type
            meetup.adress = adress

            return meetup.save()
        })
        .then(()=> {})
}
module.exports = updateMeetup