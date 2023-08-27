const { User, Post } = require('../data')
const { validateId } = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)
    // steps
    // - find user by id and validate it exists
    // - find post by id and validate it exists
    // - validate user is author of post
    // - sanitize and return post

    return Promise.all([User.findById(userId).lean(), Post.findById(postId, '-date -__v').lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            delete post._id
            delete post.author

            return post
        })
}

module.exports = retrievePost