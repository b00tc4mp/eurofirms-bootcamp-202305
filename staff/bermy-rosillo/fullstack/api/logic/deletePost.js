const context = require('./context')
const {ObjectId} = require('mongodb')

function deletePost(userId,postId){
    //validations
    if(typeof userId != 'string') throw new Error('User id is not a string')
    if(userId === '') throw new Error('User id empty')
    if(typeof postId != 'string') throw new Error('postId is not a string')
    if(postId === '') throw new Error('postId empty')

    
    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({_id:userObjectId}), context.posts.findOne({_id:postObjectId}) ])
    .then(([user,post])=>{

        if(!user) throw new Error('User not found')
        if(!post) throw new Error('Post not found')

        //look for the user owner of the post
        const author = post.author.toString()

        if(author !== userId) throw new Error('the post does not belong to this user')

        return context.posts.deleteOne({_id:postObjectId })
    })
    //do not show nothint to return
    .then(()=>{}) //return undefined 
}
module.exports = deletePost
    