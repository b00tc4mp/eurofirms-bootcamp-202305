/**
 * The `retrievePost` function retrieves a post by its ID and validates that it belongs to a specific
 * user.
 * @param userId - The `userId` parameter is the ID of the user who owns the post.
 * @param postId - The `postId` parameter is the unique identifier of the post that you want to
 * retrieve.
 * @returns The function `retrievePost` is returning a Promise that resolves to the sanitized post
 * object.
 */
const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    // steps
    // - find user by id and validate it exists
    // - find post by id and validate it exists
    // - validate user is author of post
    // - sanitize and return post

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            delete post._id
            delete post.author
            delete post.date

            return post
        })
}

module.exports = retrievePost