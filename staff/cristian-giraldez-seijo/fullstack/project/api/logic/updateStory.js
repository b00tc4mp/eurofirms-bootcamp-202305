const { Story, User } = require('../data')
const { validateId, validateUseLinkOrText: validateShortcut, validateString } = require('./helpers/validators')

function updateStory(userId, storyId, title, sumary, text, question, shortcut, origin) {
    validateId(userId)
    validateId(storyId)
    validateShortcut(shortcut, text)
    // TODO validates
    //if(text) validateText(text)
    validateString(title)
    validateString(question)

    return Promise.all([User.findById(userId).lean(), Story.findById(storyId)])
        .then(([user, story]) => {
            if (!user) throw new Error('user not found')
            if (!story) throw new Error('story not found')
            if (story.author.toString() !== userId) throw new Error('Story does not belong to user')
            //TODO if come a linkstory

            story.title = title
            story.question = question
            if (text) {
                validateString(text)
                story.text = text
            }
            if (sumary) {
                validateString(sumary)
                story.sumary = sumary
            }
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