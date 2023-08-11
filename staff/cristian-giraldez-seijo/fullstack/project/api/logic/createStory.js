const { Story, User } = require('../data')
const { validateId, validateRequiredString, validateString, validateBoolean } = require('./helpers/validators')

function createStory(userId, title, sumary, text, question, shortcut = false, origin = null) {
    // TODO validate
    validateId(userId)
    validateRequiredString(title)
    validateString(sumary)
    validateString(text)
    validateRequiredString(question)
    validateBoolean(shortcut)
    
    if (!shortcut && text === '') throw new Error('You must to put a link or a text')
    if (shortcut && text !== '') throw new Error('You must choose to put only a link or a text')


    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            //TODO if come a linkstory

            const data = {
                author: userId,
                title,
                question,
            }

            data.text = text
            data.sumary = sumary
            data.shortcut = shortcut
            data.origin = origin

            return Story.create(data)
        })
        .then(() => { })
}

module.exports = createStory