const { validateId } = require('./helpers/validators')
const { User, Story } = require('../data')

function deleteStory(userId, storyId) {
    validateId(userId)
    validateId(storyId)

    return Promise.all([User.findById(userId).lean(), Story.findById(storyId).lean()])
        .then(([user, story]) => {
            if (!user) throw new Error('user not found')
            if (!story) throw new Error('story not found')

            if (story.author.toString() !== userId) throw new Error('story does not belong to user')

            return Story.deleteOne({ _id: story._id })
        })
        .then(() => { })
}

module.exports = deleteStory