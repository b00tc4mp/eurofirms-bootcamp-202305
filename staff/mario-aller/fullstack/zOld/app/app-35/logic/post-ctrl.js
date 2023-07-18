// Añadir un post a la lista (ret T/F)
/**
 * La función `createPost` envía una solicitud POST a un servidor con el token, la imagen y el texto proporcionados, y devuelve una promesa que resuelve si la solicitud es exitosa o arroja un error si la solicitud falla.
 * @param token - El parámetro `token` es la identificación del autor que está creando la publicación. Se utiliza con fines de autenticación para garantizar que solo los usuarios autorizados puedan crear publicaciones.
 * @param image - El parámetro `imagen` es la URL de la imagen que se incluirá en la publicación.
 * @param text - El parámetro `texto` es una cadena que representa el contenido o mensaje de la publicación. Puede ser cualquier texto que el autor quiera incluir en el post.
 * @returns La función `createPost` devuelve una promesa.
 */
const createPost = function (token, image, text) {
    validateString(token, validateString.REGULAR)
    validateString(text, validateString.NAME)
    validateString(image, validateString.URL)

    return fetch('http://localhost:9000/posts', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, text })
    })
        .then(res => {
            if (res.status === 201) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}

// Devuelve todos los posts procesados
/**
 * La función `retrievePosts` recupera publicaciones de un servidor utilizando una ID de usuario para la autenticación.
 * @param token - El parámetro `token` es la identificación del usuario para el que desea recuperar las publicaciones.
 * @returns La función `retrievePosts` devuelve una promesa que se resuelve en la respuesta JSON de la solicitud de recuperación.
 */
const retrievePosts = function (token) {
    validateString(token, validateString.REGULAR)

    return fetch('http://localhost:9000/posts', {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(res => {
            if (res.status === 200) return res.json().then(posts => posts)
            else return res.json().then(body => { throw new Error(body.error) })
        })
}

/**
 * La función recupera una publicación de un servidor utilizando la ID de usuario y la ID de publicación proporcionadas.
 * @param token - El parámetro `token` es una cadena que representa la identificación del usuario. Se utiliza para autenticar al usuario y autorizar el acceso a la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea recuperar. Se utiliza para construir la URL de la solicitud de API para obtener la publicación del servidor.
 * @returns La función `retrievePost` devuelve una promesa que se resuelve en el objeto de publicación si la solicitud de recuperación es exitosa (código de estado 200), o arroja un error con el mensaje de error del cuerpo de la respuesta si la solicitud de recuperación no tiene éxito.
 */
const retrievePost = function (token, postId) {
    validateString(token, validateString.REGULAR)
    validateString(postId, validateString.REGULAR)

    return fetch('http://localhost:9000/posts/' + postId, {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(res => {
            if (res.status === 200) return res.json().then(post => post)
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
// Borra el post con su id
/**
 * La función `deletePost` envía una solicitud DELETE al servidor para eliminar una publicación con el postId especificado, utilizando el ID de usuario para la autenticación.
 * @param token - El parámetro `token` representa el ID de usuario del usuario que intenta eliminar la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea eliminar. Se utiliza para construir la URL para la solicitud DELETE al servidor.
 * @returns La función `deletePost` devuelve una promesa.
 */
const deletePost = function (token, postId) {
    validateString(token, validateString.REGULAR)

    return fetch('http://localhost:9000/posts/' + postId, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}

// Actualiza la imagen y el texto de un post

/**
 * La función `updatePost` actualiza una publicación con una nueva imagen y texto al realizar una solicitud PATCH al servidor.
 * @param token - El parámetro `token` representa la identificación del usuario que está actualizando la publicación.
 * @param postId - El parámetro `postId` es el identificador único de la publicación que desea actualizar.
 * @param image - El parámetro `imagen` es la URL de la imagen que desea actualizar para la publicación.
 * @param text - El parámetro `texto` es el contenido de texto actualizado de la publicación.
 * @returns La función `updatePost` devuelve una Promesa.
 */
const updatePost = function (token, postId, image, text) {
    validateString(token, validateString.REGULAR)
    validateString(postId, validateString.REGULAR)
    validateString(text, validateString.NAME)
    validateString(image, validateString.URL)

    return fetch('http://localhost:9000/posts/' + postId, {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, text })
    })
        .then(res => {
            if (res.status === 204) return
            else return res.json().then(err => { throw new Error(err.error) })
        })
}
