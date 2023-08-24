const context = require("./context")
const {validateId} = require('./helpers/validators')
const {ObjectId} = require('mongodb')

function toggleFavPost(userId, postId, fav) {
    validateId(userId)
    validateId(postId)

    return context.users.findOne({_id: new ObjectId(userId)})
        .then((user) => {
            if (!user) throw new Error ('userId not found')

            const mongoUserId = user._id

            if(!user.favPosts && fav === 'false') {
                let favPosts = []
                favPosts.push(postId)

                return context.users.updateOne({_id: mongoUserId}, {$set: {favPosts}})
            }

            const favPosts = user.favPosts

            if(fav === 'false') {
                favPosts.push(postId)

                return context.users.updateOne({_id: mongoUserId}, {$set: {favPosts}})
            } else if (fav === 'true') {
               const index = favPosts.findIndex((postIdArray) => {postId === postIdArray})

               favPosts.splice(index, 1)

               return context.users.updateOne({_id: mongoUserId}, {$set: {favPosts}})
            }

            
        })
}

module.exports = toggleFavPost