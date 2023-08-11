const { validateId } = require('./helpers/validators')
const { User, Story } = require('../data')

function retrieveStory(userId, storyId) {
    validateId(userId)
    validateId(storyId)

    return Promise.all([User.findById(userId).lean(), Story.findById(storyId, '-__v').lean()])
        .then(([user, story]) => {
            if (!user) throw new Error('user not found!')
            if (!story) throw new Error('story not found!')

            return story
        })
}

module.exports = retrieveStory