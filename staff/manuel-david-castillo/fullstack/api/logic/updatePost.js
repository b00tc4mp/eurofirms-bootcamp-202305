const {User, Post} = require('../data/models')
const {validateId, validateUrl, validateText} = require('./helpers/validators')

function updatePost(userId, postId, image, text){
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId)])
    .then(([user, post])=>{
        if(!post) throw new Error ('post not found')
        if(!user) throw new Error ('user not found')

        if(post.author.toString() !== userId) throw new Error('userId and author of post is different')

        post.image = image
        post.text = text
        
        return post.save() 
    })
    .then(()=>{ })
}

module.exports = updatePost