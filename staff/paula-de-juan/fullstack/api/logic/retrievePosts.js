const { User, Post } = require('../data/models')
const { validateId } = require('./helpers/validators')

function retrievePosts(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (user) throw new Error('user not found')
                return Post.find({}, '-__v').populate('author', 'name').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id
                    
                        const { author } = post

                        if (author._id) {
                            author.id = author._id.toString()
                            delete author._id
                        }
                       
                        //-post.fav = user.favs.some(fav => fav.toString() === post.id)
                    })
                    return posts
                })
                
        })
    }   
module.exports = retrievePosts