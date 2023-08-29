/**
 * La función `deletePost` elimina una publicación por su ID, después de validar el usuario y las ID de
 * la publicación y verificar si la publicación pertenece al usuario.
 * @param userId - El parámetro `userId` es la identificación del usuario que desea eliminar la
 * publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que debe
 * eliminarse.
 * @returns La función `deletePost` está devolviendo una promesa.
 */
const { validateId } = require('./helpers/validators')
const { User, Post } = require('../data')

function deletePost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([User.findById(userId).lean(), Post.findById(postId).lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')
           
            if (post.author.toString() !== userId) throw new Error('post does not belong to user')
            
            return Post.deleteOne({_id: post._id})

        })
        .then(() => { })
        
}
module.exports = deletePost