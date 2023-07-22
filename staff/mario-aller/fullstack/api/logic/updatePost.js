const { User, Post } = require('../data')
const { validateString } = require('./helpers')

/**
 * La función `updatePost` actualiza una publicación con el `postId` dado al validar el usuario y la publicación, y luego actualiza los campos `texto`, `imagen` y `fecha` de la publicación.
 * @param userId - El parámetro `userId` representa la identificación del usuario que está actualizando la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que debe actualizarse.
 * @param text - El parámetro `texto` es el contenido de texto actualizado de la publicación.
 * @param image - El parámetro `imagen` es la URL de la imagen que desea actualizar para la publicación.
 * @returns La función `updatePost` está devolviendo una Promesa.
 */
function updatePost(userId, postId, image, text) {
    validateString(userId)
    validateString(postId)
    validateString(text, validateString.NAME)
    validateString(image, validateString.URL)

    return Promise.all([User.findById(userId, '_id').lean(), Post.findById(postId)])
        .then(([user, post]) => {
            if (!user) throw new Error('Usuario no válido')
            if (!post) throw new Error('Post no válido')
            if (post.author.toString() !== userId) throw new Error('¡Sólo puede modificar sus posts!')

            const date = new Date()
            post.image = image
            post.text = text
            post.date = date
            return post.save()
        })
        .then(() => { })
}
module.exports = updatePost
