const context = require('./context')
const { ObjectId } = require('mongodb')
const {validateId, validateUrl, validateText} = require('./helpers/validators')

function createPost(userId, image, text) {
    validateId(userId)
    validateUrl(image)
    validateText(text)

    return context.users.findOne({_id: new ObjectId(userId)}) 
    .then(user => {
        if(!user) throw new Error ('userId not found')

        const author = user._id
        const date = new Date()

        return context.posts.insertOne({author, image, text, date})
        })
    .then(()=>{})
}

module.exports = createPost
