const { User, Post } = require('../data')
const { validateString } = require('./helpers')

/**
 * La función recupera una publicación por su ID y valida la ID del usuario, asegurándose de que el usuario existe y la publicación existe.
 * @param userId - El parámetro `userId` es la identificación del usuario que está recuperando la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea recuperar.
 * @returns una promesa que se resuelve en el objeto de publicación recuperado.
 */
function retrievePost(userId, postId) {
    validateString(userId)
    validateString(postId)

    return Promise.all([Post.findById(postId,'author image text -_id').lean(), User.findById(userId,'_id').lean()])
        .then(([post, user]) => {
            if (!user) throw new Error('Usuario no existe')
            if (!post) throw new Error('El post no existe')
            if(post.author.toString() !== userId) throw new Error('No tiene accesso al post')

            delete post.author
            return post
        })
}
module.exports = retrievePost