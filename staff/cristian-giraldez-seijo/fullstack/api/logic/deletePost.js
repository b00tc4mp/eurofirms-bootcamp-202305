/**
 * The `deletePost` function deletes a post by its ID, after validating the user and post IDs and
 * checking if the post belongs to the user.
 * @param userId - The `userId` parameter is the unique identifier of the user who wants to delete the
 * post.
 * @param postId - The `postId` parameter is the unique identifier of the post that needs to be
 * deleted.
 * @returns The `deletePost` function is returning a Promise.
 */
const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function deletePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            return Post.deleteOne({ _id: post._id })
        })
        .then(() => { })
}

module.exports = deletePost