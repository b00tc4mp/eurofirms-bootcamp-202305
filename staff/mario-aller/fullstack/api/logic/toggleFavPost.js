const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateString } = require('./helpers/validators')

/**
 * La función `toggleFavPost` cambia el estado favorito de una publicación para un usuario determinado.
 * @param userId - El parámetro `userId` es el identificador único del usuario que desea alternar el estado favorito de una publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que el usuario desea alternar como favorita.
 * @returns una promesa.
 */
function toggleFavPost(userId, postId) {
    validateString(userId)
    validateString(postId)

    const _userId = new ObjectId(userId)
    const _postId = new ObjectId(postId)
    
    return Promise.all([context.users.findOne({ _id: _userId }), context.posts.findOne({ _id: _postId })])
        .then(([user, post]) => {
            if (!user) throw new Error('Usuario no válido')
            if (!post) throw new Error('Post no válido')

            if (!user.favs) user.favs = []

            const pos = user.favs.findIndex(_id => _id.toString() === postId)
            if (pos === -1) user.favs.push(_postId)
            else user.favs.splice(pos, 1)

            return context.users.updateOne({ _id: _userId }, { $set: { favs: user.favs } })
        })
        .then(() => { })
}
module.exports = toggleFavPost