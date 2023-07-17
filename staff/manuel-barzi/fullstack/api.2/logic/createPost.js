const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

function createPost(userId, image, text) {
    validateId(userId)
    validateUrl(image)
    validateText(text)

    // TODO implement this. post = { author: new ObjectId(userId), image, text, date: new Date }

    const userObjectId = new ObjectId(userId)

    return context.users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not found')

            return context.posts.insertOne({ author: userObjectId, image, text, date: new Date })
        })
        .then(() => { })
}

module.exports = createPost