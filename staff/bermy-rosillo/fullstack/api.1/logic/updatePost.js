const { ObjectId } = require('mongodb')
const context = require('./context')

function updatePost(userId,postId,image,text){
    //validations-- TODO validators js
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (userId === '') throw new Error('UserId could not be empty')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if (postId === '') throw new Error('PostId is empty')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (image === '') throw new Error('image could not be empty')
    if (typeof text !== 'string') throw new Error('text is not a string')
    if (text === '') throw new Error('text is empty')

    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)
    

    return Promise.all( [context.users.findOne({_id:userObjectId}),context.posts.findOne({_id:postObjectId})] )
    .then(([user,post])=>{
        
        if(!user) throw new Error('User not found')
        if(!post) throw new Error('Post not found')

        const author = post.author.toString()

        if(userId !== author) throw new Error('this post does not belong to this user')

        return context.posts.updateOne({_id:postObjectId},{$set:{image,text, date: new Date() } })
       
    })
    .then(()=>{})
}
module.exports = updatePost 