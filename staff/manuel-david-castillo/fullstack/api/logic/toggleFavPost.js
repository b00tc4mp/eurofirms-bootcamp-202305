const context = require("./context")
const {validateId} = require('./helpers/validators')
const {ObjectId} = require('mongodb')

function toggleFavPost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return context.users.findOne({_id: new ObjectId(userId)})
        .then((user) => {
            if (!user) throw new Error ('userId not found')

            const mongoUserId = user._id

            const favPosts = user.favPosts ? user.favPosts : []

            const index = favPosts.findIndex((id) => postId === id)

            if(index === -1) {
                favPosts.push(postId)
            } else  {
               favPosts.splice(index, 1)
            }

            return context.users.updateOne({_id: mongoUserId}, {$set: {favPosts}})
        })
}

module.exports = toggleFavPost