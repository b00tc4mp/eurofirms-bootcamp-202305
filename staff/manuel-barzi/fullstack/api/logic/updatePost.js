const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

function updatePost(userId, postId, image, text) {
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    // steps
    // - find user by id and validate it exists
    // - find post by id and validate it exists
    // - validate user is author of post
    // - update post with new image and text

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            return context.posts.updateOne({ _id: postObjectId }, { $set: { image, text } })
        })
        .then(() => { })
}

module.exports = updatePost