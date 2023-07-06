const context = require('./context')
const {ObjectId} = require('mongodb')
const {validateId} = require('./helpers/validators')


function deletePost(userId, postId) {
    validateId(postId)
    validateId(userId)

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