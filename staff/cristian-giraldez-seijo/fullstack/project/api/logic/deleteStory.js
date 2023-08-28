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
if (!story.shortcut && story.options.length>0) throw new Error('this story has options and cannot be deleted')
            return Story.findOne({ options: storyId })
        })
        .then((parentStories) => {
            if(parentStories){
            const index = parentStories.options.findIndex(option => option.toString() === storyId)
            parentStories.options.splice(index, 1)
            return Promise.all([parentStories.save(), Story.deleteOne({ _id: storyId })])
            }

            else return Story.deleteOne({_id: storyId})
        })
}

module.exports = deleteStory