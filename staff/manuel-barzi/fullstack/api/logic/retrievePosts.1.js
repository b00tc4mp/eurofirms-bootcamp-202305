const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function retrievePosts(userId) {
    validateId(userId)

    const userObjectId = new ObjectId(userId)

    return context.users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not found')

            return context.posts.find().toArray()
        })
        .then(posts => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                post.author = post.author.toString()
            })

            return posts
        })
}

module.exports = retrievePosts