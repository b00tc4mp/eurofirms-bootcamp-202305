const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function deletePost(userId, postId) {
    validateId(userId)
    validateId(postId)
    
    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)
    
    return Promise.all([User.findById(userId).lean(), Post.findById(postId).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('User not found')
            if(!post) throw new Error('Post not found')

            if(post.author.toString() !== userId) throw Error('Post does not belong to use')
            return Posts.deleteOne({ _id: post._id })
        })
        .then(() => {}) //No devuelve nada
}
module.exports = deletePost
