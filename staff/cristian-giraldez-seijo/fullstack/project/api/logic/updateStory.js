const { Story, User } = require('../data')
const { validateId, validateRequiredString, validateString, validateBoolean } = require('./helpers/validators')

function updateStory(userId, storyId, title, sumary, text, question, shortcut = false, origin = null) {
    validateId(userId)
    validateId(storyId)
    // TODO validates
    validateRequiredString(title)
    validateString(sumary)
    validateString(text)
    validateRequiredString(question)
    validateBoolean(shortcut)

    if (!shortcut && text === '') throw new Error('You must to put a link or a text')
    if (shortcut && text !== '') throw new Error('You must choose to put only a link or a text')

    return Promise.all([User.findById(userId).lean(), Story.findById(storyId)])
        .then(([user, story]) => {
            if (!user) throw new Error('user not found')
            if (!story) throw new Error('story not found')
            if (story.author.toString() !== userId) throw new Error('Story does not belong to user')
            //TODO if come a linkstory

            story.title = title
            story.question = question
            story.sumary = sumary
            story.text = text
            if (shortcut) { }
            if (origin) {
                validateId(origin)
                story.origin = origin
            }
            story.dateupdated = new Date()
            return Story.updateOne(story)
        })
        .then(() => { })
}

module.exports = updateStory