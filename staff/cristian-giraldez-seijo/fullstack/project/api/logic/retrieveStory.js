const { validateId } = require('./helpers/validators')
const { Story } = require('../data')

function retrieveStory(storyId) {
    validateId(storyId)

    return Story.findById(storyId, '-__v').populate('author', 'nickname').lean()
        .then(story => {
            if (!story) throw new Error('story not found!')

            // sanitize
            if (story.author._id) {
                story.author.id = story.author._id.toString()
                delete story.author._id
            }

            story.id = story._id.toString()
            delete story._id

            return story
        })
}

module.exports = retrieveStory