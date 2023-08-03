const { User, Post } = require('../data')
const { validateString } = require('./helpers')

/**
 * La función `toggleFavPost` cambia el estado favorito de una publicación para un usuario determinado.
 * @param userId - El parámetro `userId` es el identificador único del usuario que desea alternar el estado favorito de una publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que el usuario desea alternar como favorita.
 * @returns una promesa.
 */
function toggleFavPost(userId, postId) {
    validateString(userId)
    validateString(postId)

    return Promise.all([User.findById(userId), Post.findById(postId,'_id').lean()])
        .then(([user, post]) => {
            if (!user) throw new Error('Usuario no válido')
            if (!post) throw new Error('Post no válido')
            if (!user.favs) user.favs = []

            const pos = user.favs.findIndex(_id => _id.toString() === postId)
            if (pos === -1)
                user.favs.push(post._id)
            else
                user.favs.splice(pos, 1)
            return user.save()
        })
        .then(() => { })
}
module.exports = toggleFavPost