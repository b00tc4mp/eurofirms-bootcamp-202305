const context = require("./context")
const {validateId} = require('./helpers/validators')
const {ObjectId} = require('mongodb')

function toggleFavPost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([context.users.findOne({_id: new ObjectId(userId)}), 
        context.posts.findOne({_id: new ObjectId(postId)})]) 
        .then(([user, post]) => {
            if (!user) throw new Error ('user not found')
            if(!post) throw new Error('post not found')

            const mongoUserId = user._id

            const favPosts = user.favPosts ? user.favPosts : []

            const index = favPosts.findIndex((id) => postId === id.toString())

            if(index === -1) {
                favPosts.push(new ObjectId(postId))
            } else  {
               favPosts.splice(index, 1)
            }

            return context.users.updateOne({_id: mongoUserId}, {$set: {favPosts}})
        })
        .then(()=> {})
}

module.exports = toggleFavPost