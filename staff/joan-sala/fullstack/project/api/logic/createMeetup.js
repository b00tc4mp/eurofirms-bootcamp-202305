const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function createMeetup(userId, image, text, type, adress, dateMeetup, video) {
    validateId(userId)
    validateUrl(image)
    if (video) {
        validateUrl(video)
    }
    validateText(text)
    validateText(type)
    validateText(adress)
    validateText(dateMeetup)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('User not found')

            return Meetup.create({ author: userId, image, video, text, type, adress, dateMeetup: new Date(dateMeetup)})
        })
        .then(() => { })
}
module.exports = createMeetup
