// Añadir un post a la lista (ret T/F)
/**
 * La función `createPost` envía una solicitud POST a un servidor con el ID de autor, el texto y la imagen proporcionados, y devuelve una Promesa que resuelve si la solicitud es exitosa o arroja un error si falla.
 * @param authorId - El parámetro `authorId` es la identificación del autor que está creando la publicación. Se utiliza para autenticar al autor y garantizar que solo los usuarios autorizados puedan crear publicaciones.
 * @param text - El parámetro `texto` es el contenido de la publicación, generalmente una cadena de texto que el autor desea compartir.
 * @param image - El parámetro `imagen` es una cadena que representa la URL de una imagen.
 * @returns La función `createPost` devuelve una promesa.
 */
const createPost = function (authorId, text, image) {
    validateString(authorId, validateString.REGULAR)
    validateString(text, validateString.NAME)
    validateString(image, validateString.URL)

    return fetch('http://localhost:9000/posts', {
        method: 'POST',
        headers: { Authorization: `Bearer ${authorId}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, image })
    })
        .then(res => {
            if (res.status === 201) return
            else return res.json().then(err => { throw new Error(err.error) })
        })
}

// Devuelve todos los posts procesados
/**
 * La función `retrievePosts` recupera publicaciones de un servidor utilizando una ID de usuario para la autenticación.
 * @param userId - El parámetro `userId` es la identificación del usuario para el que desea recuperar las publicaciones.
 * @returns La función `retrievePosts` devuelve una promesa que se resuelve en la respuesta JSON de la solicitud de recuperación.
 */
const retrievePosts = function (userId) {
    validateString(userId, validateString.REGULAR)

    return fetch('http://localhost:9000/posts', {
        headers: { Authorization: `Bearer ${userId}` }
    })
        .then(res => {
            if (res.status === 200) return res.json().then(posts => posts)
            else return res.json().then(err => { throw new Error(err.error) })
        })
}

// Borra el post con su id
/**
 * La función `deletePost` envía una solicitud DELETE al servidor para eliminar una publicación con el postId especificado, utilizando el ID de usuario para la autenticación.
 * @param userId - El parámetro `userId` representa el ID de usuario del usuario que intenta eliminar la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea eliminar. Se utiliza para construir la URL para la solicitud DELETE al servidor.
 * @returns La función `deletePost` devuelve una promesa.
 */
const deletePost = function (userId, postId) {
    validateString(userId, validateString.REGULAR)

    return fetch('http://localhost:9000/posts/' + postId, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${userId}` }
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(err => { throw new Error(err.error) })
        })
}

// Actualiza la imagen y el texto de un post
/**
 * La función `updatePost` actualiza una publicación con el `postId` especificado mediante el envío de una solicitud PATCH al servidor con el `texto` y la `imagen` como valores actualizados.
 * @param userId - El parámetro `userId` representa la identificación del usuario que está actualizando la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea actualizar. Se utiliza para especificar qué publicación desea modificar.
 * @param text - El parámetro `texto` es el contenido de texto actualizado de la publicación. Es una cadena que representa el nuevo texto de la publicación.
 * @param image - El parámetro `imagen` es una cadena que representa la URL de una imagen.
 * @returns una promesa.
 */
const updatePost = function (userId, postId, text, image) {
    validateString(userId, validateString.REGULAR)
    validateString(postId, validateString.REGULAR)
    validateString(text, validateString.NAME)
    validateString(image, validateString.URL)

    return fetch('http://localhost:9000/posts/' + postId, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${userId}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, image })
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(err => { throw new Error(err.error) })
        })
}
