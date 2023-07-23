/**
 * The `toggleFavPost` function toggles the favorite status of a post for a given user.
 * @param userId - The `userId` parameter is the ID of the user for whom we want to toggle the favorite
 * status of a post.
 * @param postId - The postId parameter is the unique identifier of a post. It is used to find the post
 * in the database and toggle its favorite status for a specific user.
 * @returns The function `toggleFavPost` is returning a Promise.
 */
const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function toggleFavPost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId), Post.findById(postId).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (!user.favs) {
                user.favs = []
            }

            const index = user.favs.findIndex(fav => fav.toString() === postId)
            if (index < 0)
                user.favs.push(postId)
            else
                user.favs.splice(index, 1)

            return user.save()
        })
}

module.exports = toggleFavPost