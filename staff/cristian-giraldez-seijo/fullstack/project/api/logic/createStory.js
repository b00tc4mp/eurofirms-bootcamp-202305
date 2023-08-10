const { Story, User } = require('../data')
const { validateId, validateUseLinkOrText: validateShortcut, validateString } = require('./helpers/validators')

function createStory(userId, title, sumary, text, question, shortcut, origin) {
    if (!shortcut && !text) throw new Error('You must to put a link or a text')
    if (shortcut && text) throw new Error('You must choose to put a link or a text')
    // TODO validates
    //if(text) validateText(text)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            //TODO if come a linkstory

            const data = {
                author: userId,
                title,
                question,
            }

            if (text) data.text = text
            if (sumary) data.sumary = sumary
            if (shortcut) data.shortcut = shortcut
            if (origin) data.origin = origin

            return Story.create(data)
        })
        .then(() => { })
}

module.exports = createStory