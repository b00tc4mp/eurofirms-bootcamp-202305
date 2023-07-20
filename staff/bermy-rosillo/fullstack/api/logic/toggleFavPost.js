function toggleFavPost(userId,postId){
    // 1. validate user and post exists
    // 2. toggle postId in user.favs ([])
    // 3. save user
const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function toggleFavPost(userId, postId) {
    validateId(userId)
    validateId(postId)


    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (!user.favs) {
                user.favs = []
            }

            const index = user.favs.findIndex(mongoPostId => mongoPostId.toString() === postId)
console.log(index)
            if (index === -1) user.favs.push(postObjectId)
            else user.favs.splice(index, 1)

            return context.users.updateOne({ _id: new ObjectId(userId) }, { $set: { favs: user.favs } })
        })
        .then(() => { })
}

module.exports = toggleFavPost
}