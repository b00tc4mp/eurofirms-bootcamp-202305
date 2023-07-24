const { ObjectId } = require('mongoose')
const { validateId } = require('./helpers/validators')
const { User , Post} = require('../data/models')

function deletePost(userId, postId){
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId).lean()])
        .then( ([ user, post ]) => {
            if(!user) throw new Error('user not found')
            if(!post) throw new Error('post not found')
            if( userId !== post.author.toString()) throw new Error('this user does not match with the author of the post')
            
            return Post.deleteOne ({ _id: post._id })
        })
        .then(() => { })
}
module.exports = deletePost