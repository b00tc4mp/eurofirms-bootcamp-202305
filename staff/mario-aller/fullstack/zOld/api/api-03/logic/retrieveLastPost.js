const context = require('./context')

/**
 * La función recupera la última publicación de una colección y devuelve su ID como una cadena.
 * @returns el ID de la última publicación en la colección "publicaciones".
 */
function retrieveLastPost() {

    return context.posts.find().limit(1).sort({$date:-1}) 
        .then((post) => {
            if (!post) throw new Error('No hay posts')

            return post._id.toString()
        })
}
module.exports = retrieveLastPost