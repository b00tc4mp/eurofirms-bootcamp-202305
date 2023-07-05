const context = require('./context')
const { ObjectId } = require('mongodb')
const {validateId} = require('./helpers/validators')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return context.users.findOne({_id: new ObjectId(userId)})
    .then((user)=>{
        if(!user) throw new Error('user not found')

        return Promise.all([context.users.findOne({_id: new ObjectId(userId)}), 
            context.posts.findOne({_id: new ObjectId(postId)})])
    })
    .then(([user, post])=>{
        if(!post) throw new Error ('post not found')
        if(!user) throw new Error ('user not found')

        const author = post.author.toString()
        const userId = user._id.toString()

        if(author !== userId) throw new Error('userId and author of post is different')

        return context.posts.findOne({_id: new ObjectId(postId)})
    })
    .then((post)=>{
        if(!post) throw new Error ('post not found')

        delete post.author
        delete post._id
        delete post.date

        return post
     })
    }

module.exports = retrievePost