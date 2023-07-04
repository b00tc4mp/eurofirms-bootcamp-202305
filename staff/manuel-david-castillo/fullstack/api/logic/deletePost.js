const context = require('./context')
const {ObjectId} = require('mongodb')

function deletePost(userId, postId) {
    if(typeof userId !== 'string') throw new Error ('userId is not a string')
    if(userId === '') throw new Error ('userId is empty')
    if(typeof postId !== 'string') throw new Error ('postId is not a string')
    if(postId === '') throw new Error ('postId is empty')

    return context.users.findOne({_id: new ObjectId(userId)})
    .then(user => {
        if (!user) throw new Error ('userId not found')

        return context.posts.findOne({_id: new ObjectId(postId)})
    })
    .then(post => {
        if (!post) throw new Error('postId not found')
        
        const postMongoId = post._id
        return context.posts.deleteOne({ _id: postMongoId}) 
    })
}

module.exports = deletePost