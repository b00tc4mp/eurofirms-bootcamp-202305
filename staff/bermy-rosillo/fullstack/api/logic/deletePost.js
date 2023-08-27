const{User,Post} = require('../data')
const{validateId} = require('./helpers/validators')

function deletePost(userId,postId){
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean(),Post.findById(postId).lean() ])
    .then(([user,post])=>{

        if(!user) throw new Error('User not found')
        if(!post) throw new Error('Post not found')

        const author = post.author.toString()

        if(author !== userId) throw new Error('the post does not belong to this user')

        return Post.deleteOne({_id:post._id })
    })
    .then(()=>{}) 
}
module.exports = deletePost
    