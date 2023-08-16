const { validateId } = require('./helpers/validators')
const { Story } = require('../data')

function retrieveStory(storyId) {
    validateId(storyId)

    return Story.findById(storyId, '-__v').populate('author', 'nickname').lean()
        .then(story => {
            if (!story) throw new Error('story not found!')

            // sanitize

            story.id = story._id.toString()
            delete story._id

            const { author } = story

            if (author._id) {
                author.id = author._id.toString()
                delete author._id
            }

            return story
        })
}

module.exports = retrieveStory