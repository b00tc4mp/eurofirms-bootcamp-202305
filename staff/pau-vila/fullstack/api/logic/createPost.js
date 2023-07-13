const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateUrl, validateText } = require('./helpers/validators')


function createPost(userId, image, text) {
    //validación de campos
   /* Las funciones `validateId(userId)`, `validateUrl(image)` y `validateText(text)` se utilizan para
   validar los parámetros de entrada de la función `createPost`. */
    validateId(userId)
    validateUrl(image)
    validateText(text)

   /* La línea `const userObjectId = new ObjectId(userId)` está creando una nueva instancia de la clase
   `ObjectId` de la biblioteca `mongodb`. Se utiliza para convertir el parámetro `userId`, que es
   una representación de cadena de un ObjectId, en un objeto ObjectId real. Esto es necesario porque
   MongoDB usa objetos ObjectId para identificar de forma única los documentos en una colección. */
    const userObjectId = new ObjectId(userId)

    return context.users.findOne({ _id: userObjectId })
        .then(user => {
            if (!user) throw new Error('user not founded')

            return context.posts.insertOne({ author: userObjectId, image, text, date: new Date })
        })
        /* The `.then(() => { })` is an empty callback function that is executed after the
        `context.posts.insertOne()` operation is completed successfully. It is used to handle the
        successful completion of the operation and can be used to perform any additional actions or
        logic that needs to be executed after the post is created. In this case, the empty callback
        function does not contain any code, so it does not perform any specific action. */
        /* `.then(() => { })` es una función de devolución de llamada vacía que se ejecuta después de
        que la operación `context.posts.insertOne()` se completa con éxito. Se usa para manejar la
        finalización exitosa de la operación y se puede usar para realizar cualquier acción o lógica
        adicional que deba ejecutarse después de crear la publicación. En este caso, la función de
        devolución de llamada vacía no contiene ningún código, por lo que no realiza ninguna acción
        específica. */
        .then(() => { })
}

module.exports = createPost