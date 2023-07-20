
const context = require("./context")
const { ObjectId } = require('mongodb')
const { validateId } = require("./helpers/validators")

/**
 * La función `toggleFavPost` cambia el estado favorito de una publicación para un usuario determinado.
 * @param userId - El parámetro `userId` es el identificador único del usuario que desea alternar el
 * estado favorito de una publicación.
 * @param postId - El parámetro postId es el identificador único de la publicación que el usuario desea
 * alternar como favorita.
 * @returns una promesa.
 */
function toggleFavPost(userId, postId) {
    validateId(userId)
    validateId(postId)

    return Promise.all([context.users.findOne({ _id: new ObjectId(userId) }),
    context.posts.findOne({ _id: new ObjectId(postId) })])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (!user.favs) user.favs = []

            const index = user.favs.findIndex((postObjectId) => postObjectId.toString() === postId)
            if (index === -1) {
                user.favs.push(new ObjectId(postId))
            } else {
                user.favs.splice(index, 1)
            }
            return context.users.updateOne({ _id: new ObjectId (userId) }, { $set: {favs: user.favs} })
        })
        .then(()=>{ })
}

module.exports = toggleFavPost
