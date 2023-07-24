const { User, Post } = require('../data')

const { validateId } = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId, '-date -__v' ).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to this user')
            
            delete post._id
            delete post.author

            return post

        })
}

module.exports = retrievePost