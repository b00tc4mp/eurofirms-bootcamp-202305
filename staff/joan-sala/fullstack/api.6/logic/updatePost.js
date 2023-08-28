const { ObjectId } = require('mongodb')
const context = require('./context')
const { validateId, validateText, validateUrl } = require('./helpers/validators')

function updatePost(userId, postId, text, image) {
    validateId(userId)
    validateId(postId)
    validateText(text)
    validateUrl(image)

    const { users, posts } = context

    //pasar ls variables a formato MongoDB para poderr tratar
    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([users.findOne({ _id: userObjectId }),
    posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            return posts.updateOne({_id: postObjectId}, {$set: {text, image, date: new Date()}})
            .then(()=> { })
        })
}
module.exports = updatePost