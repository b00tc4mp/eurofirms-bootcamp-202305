const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    // return User.findById(userId)
    //     .then(user => {
    //         if (!user) throw new Error('user not found')

    //         //return Post.find({}, '-__v').populate('name', '-email -password -favs -__v').lean()
    //         return Post.find({}, '-__v').populate('name', 'email').lean()
    //             .then(posts => {
    //                 // sanitize
    //                 posts.forEach(post => {
    //                     post.id = post._id.toString()
    //                     delete post._id

    //                     const { name } = post

    //                     if (name._id) {
    //                         name.id = name._id.toString()
    //                         delete name._id
    //                     }
    //                     post.fav = user.favs.some(fav => fav.toString() === post.id)
    //                 })
    //                 return posts
    //             })
    //     })
    //Búsqueda completa, devuelve una cadena de promesas. DOCUMENTO
    return Promise.all([User.findById(userId).lean(), Post.findById(postId, '-date -__v').lean()])
        .then(([user, post]) => { //DESTRUCTURAR    
            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            if (post.name.toString() !== userId) throw new Error('post does not belong to user')
            //detcta si el userId no es igual al string del autor del post

            delete post._id
            delete post.name
            
            return post
        })
        post.fav = user.favs.some(fav => fav.toString() === post.id)
}
module.exports = retrievePost