const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function deletePost(userId, postId) {
    validateId(userId)
    validateId(postId)
    
    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)
    
    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('User not found')
            if(!post) throw new Error('Post not found')

            if(post.author.toString() !== userId) throw Error('Post does not belong to use')
            return context.posts.deleteOne({ _id: postObjectId })
        })
        .then(() => {}) //No devuelve nada
}
module.exports = deletePost
