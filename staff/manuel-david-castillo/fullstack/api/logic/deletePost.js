const {User, Post} = require('../data/models')
const {validateId} = require('./helpers/validators')

function deletePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean() ,Post.findById(postId).lean()])
    .then(([user, post]) => {
        if (!user) throw new Error ('userId not found')
        if (!post) throw new Error('postId not found')

        if(post.author.toString() !== userId) throw new Error('userId and author of post is different')

        return Post.deleteOne({_id: post._id})
    })
}

module.exports = deletePost