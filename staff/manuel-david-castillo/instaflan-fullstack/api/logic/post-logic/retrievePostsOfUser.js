const {User, Post} = require('../../data/models')
const {validateId} = require('../helpers/validators')

function retrievePostsOfUser(userId, userIdProfile) {
    validateId(userId)

    return Promise.all([User.findById(userId).lean(), 
        Post.find({author: userIdProfile}, '-__v').populate('author', 'name image').lean(),
        User.find({},'-__v').lean()])
    .then(([user, posts, users])=>{
        if(!user) throw new Error('user not found')

        posts.forEach(post => {
            post.id = post._id.toString()
            delete post._id

            const userFound = users.find(user => user._id.toString() === post.author.toString() )

            if(!userFound) {
                post.author = {name: 'not found', image: null, id: null}
               } else {
                post.author = {name: userFound.name, image: userFound.image, id: userFound._id.toString()}
               }
            
            if (!user.favPosts) user.favPosts = []

            const favPosts = user.favPosts.map((post) => {
                return post.toString()
            })

           post.fav = favPosts.includes(post.id) 
        })

        return posts
})}

module.exports = retrievePostsOfUser