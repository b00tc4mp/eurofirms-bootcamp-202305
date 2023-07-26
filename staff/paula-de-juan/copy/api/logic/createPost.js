const context = require('./context')
const mongodb = require('mongodb')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

const { ObjectId } = mongodb

function createPost(userId, image, text){
    validateId(userId)
    validateUrl(image)
    validateText(text)

    const userObjectId = new ObjectId(userId)

    return context.users.findOne({ _id: userObjectId })
        .then(user => {
            if(!user) throw new Error ('user not found')

            const author = user._id
            const date = new Date()

            return context.posts.insertOne({
                author: userObjectId, image, text, date })
        })
        .then(() => { })
}
module.exports = createPost