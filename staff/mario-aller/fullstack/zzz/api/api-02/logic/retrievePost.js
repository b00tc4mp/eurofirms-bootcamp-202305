const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateString } = require('./helpers/validators')

/**
 * La función recupera una publicación y su autor de una base de datos basada en el postId proporcionado.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea recuperar.
 * @returns La función `retrievePosts` devuelve una Promesa que se resuelve en un objeto de publicación.
 */
function retrievePost(postId) {
    validateString(postId)

    return Promise.All([context.posts.findOne({ _id: new ObjectId(postId) }), context.users.find().toArray()])
        .then(([post, users]) => {
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