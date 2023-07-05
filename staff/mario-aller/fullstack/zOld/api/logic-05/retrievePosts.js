const ctx = require('./ctx')
const { ObjectId } = require('mongodb')
const { stringValid } = require('./helpers/validators')

/**
 * La función recupera publicaciones de una base de datos, modifica los datos y devuelve las publicaciones con información adicional sobre el autor.
 * @param userId - El parámetro `userId` es el identificador único de un usuario. Se utiliza para recuperar publicaciones asociadas con ese usuario.
 * @returns La función `retrievePosts` devuelve una promesa que se resuelve en una serie de publicaciones.
 */
function retrievePosts(userId) {
    stringValid(userId)

    return ctx.users.findOne({ _id: new ObjectId(userId) })
        .then((user) => {
            if (!user) throw new Error('El usuario no válido')

            return Promise.all([ctx.users.find().toArray(), ctx.posts.find().toArray()])
        })
        .then(([users, posts]) => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id
                const authorId = post.author.toString()
                const authorObj = users.find(user => user._id.toString() === authorId)
                post.author = { id: authorId, name: authorObj.name }
            });
            return posts
        })
}
module.exports = retrievePosts