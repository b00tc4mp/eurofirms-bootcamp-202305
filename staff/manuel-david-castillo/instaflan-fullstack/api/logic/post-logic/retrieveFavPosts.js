const { truncate } = require('fs/promises')
const {User, Post} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function retrieveFavPosts(userId) {
    validateId(userId)

    return User.findById(userId).lean()
    .then(user => {
        if (!user) throw new Error('user not found')

        const favPosts = user.favPosts

        return  Post.find({_id: favPosts}, '-__v').populate('author', 'name image').lean()

    })
    .then((posts)=>{
        posts.forEach(post => {
            post.id = post._id.toString()
            delete post._id

            if(post.author._id){
            post.author.id = post.author._id.toString()
            
            delete post.author._id
            }

           post.fav = true
        })

        return posts
})}

module.exports = retrieveFavPosts