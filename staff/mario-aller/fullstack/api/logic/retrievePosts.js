const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateString } = require('./helpers/validators')

/**
 * La función recupera publicaciones de una base de datos, modifica los datos y devuelve las publicaciones con información adicional sobre el autor.
 * @param userId - El parámetro `userId` es el identificador único de un usuario. Se utiliza para recuperar publicaciones asociadas con ese usuario.
 * @returns La función `retrievePosts` devuelve una promesa que se resuelve en una serie de publicaciones.
 */
function retrievePosts(userId) {
    validateString(userId)
    let favs

    return context.users.findOne({ _id: new ObjectId(userId) })
        .then((user) => {
            if (!user) throw new Error('El usuario no válido')
            if (!user.favs) favs = []
            else favs = user.favs.map(_id => _id.toString())

            return Promise.all([context.users.find().toArray(), context.posts.find().sort({ date: -1 }).toArray()])
        })
        .then(([users, posts]) => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                const authorId = post.author.toString()
                const authorObj = users.find(user => user._id.toString() === authorId)
                post.author = { id: authorId, name: authorObj.name }

                if (favs.some(id => id === post.id)) post.fav = true
                else post.fav = false
            });
            return posts
        })
}
module.exports = retrievePosts