const { validateId, validateUrl, validateText, validateVideo } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function createMeetup(userId, image, video, text) {
    validateId(userId)
    validateUrl(image)
    validateVideo(video)
    validateText(text)

    return User.findById(userId)
        .then(user => {
            
            const date = new Date()

            if (!user) throw new Error('User not found')

            return Meetup.create({ author: userId, image, video, text, date })
        })
        .then(() => {}) 
}
module.exports = createMeetup
