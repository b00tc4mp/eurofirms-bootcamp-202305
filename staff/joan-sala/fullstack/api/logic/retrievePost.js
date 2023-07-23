const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function retrievePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    //Búsqueda completa, devuelve una cadena de promesas. DOCUMENTO
    return Promise.all([User.findById(userId).lean(), Post.findById(postId, '-date -__v').lean()])
        .then(([user, post]) => { //DESTRUCTURAR    
            if (!user) throw new Error('User not found')
            if (!post) throw new Error('Post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')
            //detcta si el userId no es igual al string del autor del post

            delete post._id
            delete post.author
            
            return post
        })
}
module.exports = retrievePost