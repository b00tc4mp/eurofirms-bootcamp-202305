const { User, Post } = require('../data')
const { validateString } = require('./helpers')


/**
 * La función `deletePost` elimina una publicación de la base de datos si el usuario es el autor de la publicación.
 * @param userId - El parámetro `userId` representa la identificación del usuario que desea eliminar la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea eliminar.
 * @returns una promesa.
 */
function deletePost(userId, postId) {
    validateString(userId)
    validateString(postId)

    return Promise.all([User.findById(userId,'_id').lean(), Post.findById(postId,'author').lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('Usuario no válido')
            if (!post) throw new Error('Post no válido')
            if (post.author.toString() !== userId) throw new Error('¡Sólo puede borrar sus posts!')

            return Post.deleteOne({ _id: post._id })
        })
        .then(() => { })
}
module.exports = deletePost