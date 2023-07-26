const { ObjectId } = require("mongodb");
const { validateId } = require("./helpers/validators");
const context = require('./context')

function deletePost(userId, postId){
    validateId(userId)
    validateId(postId)

    const userObjectId = new ObjectId(userId)
    
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId }) ])
        .then( ([ user, post ]) => {
            if(!user) throw new Error('user not found')
            if(!post) throw new Error('post not found')
            if( userId !== post.author.toString()) throw new Error('this user does not match with the author of the post')
            
            return context.posts.deleteOne({_id: postObjectId})
        })
        .then(() => { })
}
module.exports = deletePost