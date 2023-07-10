const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateString } = require('./helpers/validators')

/**
 * La función recupera una publicación por su ID y valida la ID del usuario, asegurándose de que el usuario existe y la publicación existe.
 * @param userId - El parámetro `userId` es la identificación del usuario que está recuperando la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea recuperar.
 * @returns una promesa que se resuelve en el objeto de publicación recuperado.
 */
function retrievePost(userId, postId) {
    validateString(userId)
    validateString(postId)

    return Promise.all([context.posts.findOne({ _id: new ObjectId(postId) }), context.users.find().toArray()])
        .then(([post, users]) => {
            if (!users.some(user => user._id.toString() === userId)) throw new Error('Usuario no existe')
            if (!post) throw new Error('El post no existe')

            post.id = post._id.toString()
            delete post._id
            const authorId = post.author.toString()
            const authorObj = users.find(user => user._id.toString() === authorId)
            post.author = { id: authorId, name: authorObj.name }

            return post
        })
}
module.exports = retrievePost