const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

function createPost(userId, image, text) {
    // TODO implement this. post = { author: new ObjectId(userId), image, text, date: new Date }

    validateId(userId)
    validateUrl(image)
    validateText(text)

    const userObjectId = new ObjectId(userId)
    
    return context.users.findOne({_id: new ObjectId(userId)})
        .then(user => {
            if (!user) throw new Error('User not found')

            return context.posts.insertOne({ author: userObjectId, image, text, date: new Date() })
        })
        .then(() => {}) //No devuelve nada
}
module.exports = createPost
