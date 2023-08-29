/**
 * La función createPost crea una nueva publicación al validar la identificación del usuario, la URL de
 * la imagen y el texto, y luego encuentra al usuario por identificación y crea una nueva publicación
 * con la información proporcionada.
 * @param userId - El parámetro `userId` es el identificador único del usuario que está creando la
 * publicación.
 * @param image - El parámetro `imagen` es la URL de la imagen que se asociará con la publicación.
 * @param text - El parámetro `texto` es el contenido o mensaje de la publicación que el usuario desea
 * crear.
 * @returns La función `createPost` está devolviendo una promesa.
 */
const { validateId, validateUrl, validateText } = require('./helpers/validators')
const { User, Post } = require('../data')

function createPost(userId, image, text) {
    validateId(userId)
    validateUrl(image)
    validateText(text)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not founded')

            return Post.create({ author: userId, image, text })
        })
        .then(() => { })
}

module.exports = createPost