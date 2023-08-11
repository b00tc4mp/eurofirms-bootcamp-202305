const { validateId } = require('./helpers/validators')
const { Story } = require('../data')

function retrieveStory(storyId) {
    validateId(storyId)

    return Story.findById(storyId, '-__v').lean()
        .then(story => {
            if (!story) throw new Error('story not found!')

            return story
        })
}

module.exports = retrieveStory