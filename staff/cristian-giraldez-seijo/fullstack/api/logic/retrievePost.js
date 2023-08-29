/**
 * The function `retrievePost` retrieves a post by its ID and checks if it belongs to a specific user.
 * @param userId - The `userId` parameter is the unique identifier of the user whose post we want to
 * retrieve.
 * @param postId - The `postId` parameter is the unique identifier of the post that you want to
 * retrieve.
 * @returns The `retrievePost` function is returning a Promise that resolves to the post object.
 */
const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId, '-date -__v').lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found!')
            if (!post) throw new Error('post not found!')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user!')

            delete post._id
            delete post.author

            return post
        })
}

module.exports = retrievePost