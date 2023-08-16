const { validateId } = require('./helpers/validators')
const { Story } = require('../data')

function retrieveStories() {
    return Story.find({}, 'title sumary').populate('author', 'nickname').lean()
        .then(stories => {
            // sanitize
            stories.forEach(story => {
                story.id = story._id.toString()
                delete story._id

                const { author } = story

                if (author._id) {

                    author.id = author._id.toString()
                    delete author._id
                }
            })

            return stories
        })
}

module.exports = retrieveStories