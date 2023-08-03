const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function toggleFavPost(userId, postId) {
    validateId(userId)  
    validateId(postId)

    return Promise.all([User.findById(userId), Post.findById(postId).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            //búsqueda del usuario
            const index = user.favs.findIndex(fav => fav.toString() === postId)

            if (index < 0)
                user.favs.push(postId)
            else
                user.favs.splice(index, 1)

            return user.save()
        })
}
module.exports = toggleFavPost