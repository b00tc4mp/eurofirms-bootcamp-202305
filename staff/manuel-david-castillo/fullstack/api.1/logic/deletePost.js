const context = require('./context')
const {ObjectId} = require('mongodb')
const {validateId} = require('./helpers/validators')


function deletePost(userId, postId) {
    validateId(postId)
    validateId(userId)

    return context.users.findOne({_id: new ObjectId(userId)})
    .then(user => {
        if (!user) throw new Error ('userId not found')

        return Promise.all([context.posts.findOne({_id: new ObjectId(postId)}), 
            context.users.findOne({_id: new ObjectId(userId)})])
    })
    .then(([post, user]) => {
        if (!post) throw new Error('postId not found')
        if (!user) throw new Error ('userId not found')
        
        const mongoAuthor = post.author.toString()
        const mongoUserId = user._id.toString()

        if(mongoAuthor !== mongoUserId) throw new Error('userId and author of post is different')

        const mongoPostId = post._id

        return context.posts.deleteOne({ _id: mongoPostId}) 
    })
}

module.exports = deletePost