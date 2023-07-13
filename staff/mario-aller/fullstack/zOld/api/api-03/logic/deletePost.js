const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateString } = require('./helpers/validators')

/**
 * La función `deletePost` elimina una publicación de la base de datos si el usuario es el autor de la publicación.
 * @param userId - El parámetro `userId` representa la identificación del usuario que desea eliminar la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea eliminar.
 * @returns una promesa.
 */
function deletePost(userId, postId) {
    validateString(userId)
    validateString(postId)


    const _userId = new ObjectId(userId)
    const _postId = new ObjectId(postId)
    return Promise.all([context.users.findOne({ _id: _userId }), context.posts.findOne({ _id: _postId })])
        .then(([user, post]) => {
            if (!user) throw new Error('Usuario no válido')
            if (!post) throw new Error('Post no válido')
            if (post.author.toString() !== userId) throw new Error('¡Sólo puede borrar sus posts!')

            return context.posts.deleteOne({ _id: _postId })
        })
        .then(() => { })
}
module.exports = deletePost