const { User, Post } = require('../data')
const { validateString } = require('./helpers')

/**
 * La función recupera publicaciones de una base de datos, modifica los datos y devuelve las publicaciones con información adicional sobre el autor.
 * @param userId - El parámetro `userId` es el identificador único de un usuario. Se utiliza para recuperar publicaciones asociadas con ese usuario.
 * @returns La función `retrievePosts` devuelve una promesa que se resuelve en una serie de publicaciones.
 */
function retrievePosts(userId) {
    validateString(userId)
    let favs

    return User.findById(userId, 'favs').lean()
        .then((user) => {
            if (!user) throw new Error('El usuario no válido')
            if (!user.favs)
                favs = []
            else
                favs = user.favs.map(_id => _id.toString())

            return Post.find().populate('author', '_id name').sort('-date').lean()
        })
        .then(posts => posts.map(post => {
            console.log(post)
            post.id = post._id.toString()
            delete post._id

            post.author.id = post.author._id.toString()

            // delete post.author._id

            if (favs.some(id => id === post.id))
                post.fav = true
            else
                post.fav = false
            return post
        }))
}
module.exports = retrievePosts