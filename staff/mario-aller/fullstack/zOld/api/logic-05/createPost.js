const ctx = require('./ctx')
const { ObjectId } = require('mongodb')
const { stringValid } = require('./helpers/validators')

/**
 * La función crea una nueva publicación con el ID de autor, el mensaje y la URL de la imagen proporcionados.
 * @param authorId - El ID del autor que está creando la publicación.
 * @param msg - El parámetro `msg` es una cadena que representa el contenido de texto de la publicación.
 * @param img - El parámetro `img` es una cadena que representa la URL de una imagen.
 * @returns una promesa.
 */
function createPost(authorId, msg, img) {
    stringValid(authorId)
    stringValid(msg, ctx.STR_NAME)
    stringValid(img, ctx.STR_URL)

    return ctx.users.findOne({ _id: new ObjectId(authorId) })
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            return ctx.posts.insertOne({ author: user._id, text: msg, image: img })
        })
        .then(() => { })
}
module.exports = createPost