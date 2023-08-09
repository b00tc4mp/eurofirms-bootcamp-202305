const { User, Post } = require('../data')
const { validateId } = require('./helpers/validators')

function toggleFavPost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId), Post.findById(postId).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            const index = user.favs.findIndex(fav => fav.toString() === postId)

            if (index < 0){
                user.favs.push(postId)
            } else {
                user.favs.splice(index, 1)
            }
            return user.save()
        })
    }
module.exports = toggleFavPost