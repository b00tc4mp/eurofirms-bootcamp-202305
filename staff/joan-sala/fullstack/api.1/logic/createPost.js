const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

function createPost(userId, image, text) {
    // TODO implement this. post = { author: new ObjectId(userId), image, text, date: new Date }

    validateId(userId)
    validateUrl(image)
    validateText(text)

    return context.users.findOne({_id: new ObjectId(userId)})
        .then(user => {
            if (!user) throw new Error('User not found')

            return context.posts.insertOne({ author: userId, image, text })
        })
        .then(() => {}) //No devuelve nada/
}
module.exports = createPost
