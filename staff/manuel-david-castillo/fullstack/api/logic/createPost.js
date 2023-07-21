const {validateId, validateUrl, validateText} = require('./helpers/validators')
const {User, Post} = require('../data/models')

function createPost(userId, image, text) {
    validateId(userId)
    validateUrl(image)
    validateText(text)

    return User.findById(userId) 
    .then(user => {
        if(!user) throw new Error ('userId not found')

        const author = user._id
        const date = new Date()

        return Post.create({author, image, text, date})
        })
    .then(()=>{})
}

module.exports = createPost
