const { truncate } = require('fs/promises')
const {User, Post} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function retrieveFavPosts(userId, userIdProfile) {
    validateId(userId)
    validateId(userIdProfile)

    return Promise.all([User.findById(userId).lean(), User.findById(userIdProfile).lean()])
    .then(([user, userProfile]) => {
        if (!user) throw new Error('user not found')
        if (!userProfile) throw new Error('user not found')

        const favPosts = userProfile.favPosts

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