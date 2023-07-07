const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateUrl, validateText } = require('./helpers/validators')

function updatePost(userId, postId, image, text) {
    //if (typeof userId !== 'string') throw new Error('userId is not a string')
    //if (userId === '') throw new Error('userId could not be empty')
    // if (typeof postId !== 'string') throw new Error('postId is not a string')
    // if (postId === '') throw new Error('postId is empty')
    // if (typeof image !== 'string') throw new Error('image is not a string')
    // if (image === 'string') throw new Error('image could not be empty')
    // if (typeof text !== 'string') throw new Error('text is not a string')
    //if (text === '') throw new Error('text is empty')

   /* El código `validateId(userId) validarId(postId) validarUrl(imagen) validarText(texto)` está
   llamando a cuatro funciones de validación diferentes para comprobar si los valores proporcionados
   para `userId`, `postId`, `imagen` y `texto` son válido. */
    validateId(userId)
    validateId(postId)
    validateUrl(image)
    validateText(text)

    /* El código `const userObjectId = new ObjectId(userId)` y `const postObjectId = new
    ObjectId(postId)` están creando nuevas instancias de la clase `ObjectId` de la biblioteca
    `mongodb`. Estas instancias se utilizan para convertir las cadenas `userId` y `postId` en
    valores `ObjectId` de MongoDB. Esto es necesario porque MongoDB usa `ObjectId` como el tipo de
    datos predeterminado para las ID de documentos. */
    const userObjectId = new ObjectId(userId)
    const postObjectId = new ObjectId(postId)

    return Promise.all([context.users.findOne({ _id: userObjectId }), context.posts.findOne({ _id: postObjectId })])
        .then(([user, post]) => {
            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('post does not belong to user')

            return context.posts.updateOne({ _id: postObjectId }, { $set: { image, text, date: new Date() } })
        })
        .then(() => { })
}
module.exports = updatePost