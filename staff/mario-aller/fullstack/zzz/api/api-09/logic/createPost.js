const { User, Post } = require('../data')
const { validateString } = require('./helpers')

/**
 * La función crea una nueva publicación validando los parámetros de entrada e insertando la publicación en la base de datos.
 * @param authorId - El parámetro authorId es el identificador único del autor que está creando la publicación.
 * @param text - El parámetro `texto` es el contenido de la publicación, como el texto o la descripción que el autor quiere compartir.
 * @param image - El parámetro "imagen" es una cadena que representa la URL de una imagen.
 * @returns una promesa.
 */
function createPost(authorId, image, text) {
    validateString(authorId)
    validateString(image, validateString.URL)
    validateString(text, validateString.NAME)
    
    return User.findById(authorId,'_id').lean()
        .then((user) => {
            if (!user) throw new Error('El usuario no existe')

            return Post.create({ author: user._id, image, text })
        })
        .then(() => { })
}
module.exports = createPost