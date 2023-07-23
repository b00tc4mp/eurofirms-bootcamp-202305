const {User, Post} = require('../data/models')
const {validateId} = require('./helpers/validators')
const {ObjectId} = require('mongoose')

function toggleFavPost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId), Post.findById(postId).lean()]) 
    .then(([user, post]) => {
        if (!user) throw new Error ('user not found')
        if(!post) throw new Error('post not found')

        const favPosts = user.favPosts ? user.favPosts : []

        const index = favPosts.findIndex((id) => postId === id.toString())

        if(index === -1) {
            favPosts.push(post._id)
        } else  {
           favPosts.splice(index, 1)
        }

        return user.save()
    })
    .then(()=> {})
}

module.exports = toggleFavPost