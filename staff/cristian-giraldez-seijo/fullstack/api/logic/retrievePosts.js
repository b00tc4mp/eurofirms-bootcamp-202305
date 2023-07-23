/**
 * The function retrieves posts from the database and populates the author field, while also sanitizing
 * the data and adding a "fav" property to indicate if the post is favorited by the user.
 * @param userId - The `userId` parameter is the ID of the user for whom we want to retrieve posts.
 * @returns The function `retrievePosts` is returning a promise that resolves to an array of posts.
 */
const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function retrievePosts(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            //return Post.find({}, '-__v').populate('author', '-email -password -favs -__v').lean()
            return Post.find({}, '-__v').populate('author', 'name').lean()
                .then(posts => {
                    // sanitize
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        const { author } = post

                        if (author._id) {
                            author.id = author._id.toString()
                            delete author._id
                        }

                        post.fav = user.favs.some(fav => fav.toString() === post.id)
                    })

                    return posts
                })
        })
}

module.exports = retrievePosts