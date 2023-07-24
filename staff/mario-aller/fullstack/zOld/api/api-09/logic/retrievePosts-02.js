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

    return User.findById(userId, 'name favs').lean()
        .then((user) => {
            if (!user) throw new Error('El usuario no válido')
            if (!user.favs)
                favs = []
            else
                favs = user.favs.map(_id => _id.toString())

            return Promise.all([Post.find().sort('-date').lean(), User.find({}, 'name -_id').lean()])
        })
        .then(([posts, users]) => {
            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                const postIdAux = post.author.toString()
                delete post.author
                post.author = {id: postIdAux, name: users.find(user=> user._id.toString() === postIdAux).name }
                // post.author.name = users.find(user=> user._id.toString() === postIdAux).name

                if (favs.some(id => id === post.id))
                    post.fav = true
                else
                    post.fav = false
            })
            return posts
        })
}
module.exports = retrievePosts