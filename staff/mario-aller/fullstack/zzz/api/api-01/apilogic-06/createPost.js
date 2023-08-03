const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateStr } = require('./helpers/validators')

/**
 * La función crea una nueva publicación validando los parámetros de entrada e insertando la publicación en la base de datos.
 * @param authorId - El parámetro authorId es el identificador único del autor que está creando la publicación.
 * @param text - El parámetro `texto` es el contenido de la publicación, como el texto o la descripción que el autor quiere compartir.
 * @param image - El parámetro "imagen" es una cadena que representa la URL de una imagen.
 * @returns una promesa.
 */
function createPost(authorId, text, image) {
    validateStr(authorId)
    validateStr(text, validateStr.NAME)
    validateStr(image, validateStr.URL)

    return context.users.findOne({ _id: new ObjectId(authorId) })
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            return context.posts.insertOne({ author: user._id, text, image, date: new Date() })
        })
        .then(() => { })
}
module.exports = createPost