const context = require('./context')
const mongodb = require('mongodb')
const { ObjectId } = mongodb

const { validateId, validateUrl, validateText } = require('./helpers/validators')

function updatePost(userId, postId, image, text){
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId}), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if(!user) throw new Error('user not found')
            if(!post) throw new Error('post not found')
        
            if(post.author.toString() !== userId) throw new Error('post does not belong to the user')

            return context.posts.updateOne({ _id: postObjectId }, {$set: { image, text } })
        })
        .then(() => { })
}
module.exports = updatePost

