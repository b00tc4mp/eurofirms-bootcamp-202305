const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function retrievePosts(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            //return Post.find({}, '-__v').populate('author', '-email -password -favs -__v').lean()
            return Post.find({}, '-__v').populate('author', 'name').lean()
        })
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
            })

            return posts
        })
}

module.exports = retrievePosts