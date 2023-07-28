const {User, Post} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function retrievePosts(userId) {
    validateId(userId)

    return Promise.all([User.findById(userId).lean(), 
        Post.find({}, '-__v').populate('author', 'name image').lean()])
    .then(([user, posts])=>{
        if(!user) throw new Error('user not found')

        posts.forEach(post => {
            post.id = post._id.toString()
            delete post._id

            if(post.author._id) {
                post.author.id = post.author._id
                delete post.author._id
            }
            
            if (!user.favPosts) user.favPosts = []

            const favPosts = user.favPosts.map((post) => {
                return post.toString()
            })

           post.fav = favPosts.includes(post.id) 
        })

        return posts
})}

module.exports = retrievePosts