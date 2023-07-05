const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateString } = require('./helpers/validators')


/**
 * La función `updatePost` actualiza una publicación con el `postId` dado al validar el usuario y la publicación, y luego actualiza los campos `texto`, `imagen` y `fecha` de la publicación.
 * @param userId - El parámetro `userId` representa la identificación del usuario que está actualizando la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que debe actualizarse.
 * @param text - El parámetro `texto` es el contenido de texto actualizado de la publicación.
 * @param image - El parámetro `imagen` es la URL de la imagen que desea actualizar para la publicación.
 * @returns La función `updatePost` está devolviendo una Promesa.
 */
function updatePost(userId, postId, text, image) {
    validateString(userId)
    validateString(postId)
    validateString(text, validateString.NAME)
    validateString(image, validateString.URL)

    const _userId = new ObjectId(userId)
    const _postId = new ObjectId(postId)
    return Promise.all([context.users.findOne({ _id: _userId }), context.posts.findOne({ _id: _postId })])
        .then(([user, post]) => {
            if (!user) throw new Error('Usuario no válido')
            if (!post) throw new Error('Post no válido')
            if (post.author.toString() !== userId) throw new Error('¡Sólo puede modificar sus posts!')

            const date = new Date()
            return context.posts.updateOne({ _id: _postId }, { $set: { text, image, date } })
        })
        .then(() => { })
}
module.exports = updatePost
