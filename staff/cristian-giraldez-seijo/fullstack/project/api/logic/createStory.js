const { Story, User } = require('../data')
const { validateId, validateRequiredString, validateString, validateBoolean } = require('./helpers/validators')

function createStory(userId, title, sumary, text, question, storyId = null, origin = null, shortcut = false) {
    // TODO validate
    validateId(userId)
    if (storyId)
        validateId(storyId)
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
        .then((story) => {
            return Promise.all([Story.findById(storyId), Story.findById(story._id.toString(), '-__v')])
                .then(([parentStory, childStory]) => {
                    if (!parentStory)
                        return
                    if (!(parentStory.origin))
                        childStory.origin = parentStory._id
                    else
                        childStory.origin = parentStory.origin
                    parentStory.options.push(childStory._id)
                    return Promise.all([parentStory.save(), childStory.save()])
                })
                .then(() => { })
        })
}

module.exports = createStory