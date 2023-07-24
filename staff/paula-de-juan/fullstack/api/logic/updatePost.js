const { User, Post } = require('../data/models')
const mongoose = require('mongoose')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

function updatePost(userId, postId, image, text){
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    //const userObjectId = new ObjectId(userId)
    //const postObjectId = new ObjectId(postId)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId)])
        .then(([user, post]) => {
            if(!user) throw new Error('user not found')
            if(!post) throw new Error('post not found')
        
            if(post.author.toString() !== userId) throw new Error('post does not belong to the user')

            post.image = image
            post.text = text

            return post.save()
        })
        .then(() => { })
}
module.exports = updatePost

