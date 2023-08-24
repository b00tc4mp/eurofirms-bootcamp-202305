const { validateId } = require('./helpers/validators')
const { Story } = require('../data')

function retrieveStory(storyId) {
    validateId(storyId)

    return Story.findById(storyId, '-__v').populate('author', 'nickname').populate('options', 'title').lean()
        .then(story => {
            if (!story) throw new Error('story not found!')

            // sanitize

            story.id = story._id.toString()
            delete story._id

            const { author } = story

            author.id = author._id.toString()
            delete author._id

            const { options } = story
            if (options.length !== 0)
                options.forEach(option => {
                    option.id = option._id.toString()
                    delete option._id
                });

            return story

        })
}

module.exports = retrieveStory