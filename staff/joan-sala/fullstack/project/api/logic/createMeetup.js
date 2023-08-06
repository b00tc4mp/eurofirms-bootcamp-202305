const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Meetup } = require('../data')

function createMeetup(userId, image, video, text) {
    validateId(userId)
    validateUrl(image)
    if(video) {
        validateUrl(video)
    } 
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
