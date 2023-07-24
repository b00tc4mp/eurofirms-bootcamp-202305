const { User, Post } = require('../data/models')
const mongoose = require('mongoose')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

const { ObjectId } = require('mongoose')

function createPost(userId, image, text){
    validateId(userId)
    validateUrl(image)
    validateText(text)

    // const userObjectId = new ObjectId(userId)
    /* Ahora ya no nos hace falta esto por el User.findById 
    return context.users.findOne({ _id: userObjectId })*/

    return User.findById(userId)
        .then(user => {
            if(!user) throw new Error ('user not found')

        /*    const author = user._id */
           // const date = new Date()

            return Post.create({ author: userId, image, text})
        })
        .then(() => { })
}
module.exports = createPost