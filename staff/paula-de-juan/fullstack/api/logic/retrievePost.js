const { User, Post } = require('../data/models')
const { ObjectId } = require('mongoose')
const { validateId } = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to this user')
            
            return post

        })
}

module.exports = retrievePost