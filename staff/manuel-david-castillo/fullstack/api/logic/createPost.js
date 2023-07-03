const context = require('./context')
const { ObjectId } = require('mongodb')

function createPost(userId, image, text) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if(userId === '') throw new Error('userId is empty')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if(image === '') throw new Error('image is empty')
    if (typeof text !== 'string') throw new Error('text is not a string')
    if(text === '') throw new Error('text is empty')

    return context.users.findOne({_id: new ObjectId(userId)})
    .then(user => {
        if(!user) throw new Error ('userId not found')

        const author = user._id

        const date = new Date().toISOString()
        return context.posts.insertOne({author, image, text, date})
        })
}

module.exports = createPost