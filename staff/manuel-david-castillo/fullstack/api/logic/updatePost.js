const context = require('./context')
const {ObjectId} = require('mongodb')
const {validateId, validateUrl, validateText} = require('./helpers/validators')

function updatePost(userId, postId, image, text){
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    return context.users.findOne({_id: new ObjectId(userId)})
    .then((user)=>{
        if(!user) throw new Error('user not found')

        return Promise.all([ context.posts.findOne({_id: new ObjectId(postId)}), 
            context.users.findOne({_id: new ObjectId(userId)})])
    })
    .then(([post, user])=>{
        if(!post) throw new Error ('post not found')
        if(!user) throw new Error ('user not found')

        const author = post.author.toString()
        const userId = user._id.toString()

        if(author !== userId) throw new Error('userId and author of post is different')

        const mongoPostId = post._id
        const date = new Date()

        return context.posts.updateOne({ _id: mongoPostId }, { $set: { author: user._id, image, text, date }});
    })
    .then(()=>{
        return context.posts.findOne({_id: new ObjectId(postId)})
    })
}

module.exports = updatePost