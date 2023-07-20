function retrievePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    return fetch(`http://localhost:9000/posts/${postId}`, {
        /* Los `headers: { Authorization: `Bearer ` }` están configurando el encabezado de
        autorización para la solicitud HTTP. El valor del encabezado de Autorización se establece en
        `Bearer `, donde `` es el valor del parámetro postId pasado a la función
        `retrievePost`. Esto se usa comúnmente con fines de autenticación, donde el servidor espera
        un token en el encabezado de Autorización para verificar la identidad del usuario que
        realiza la solicitud. */
        headers: {
            Authorization: `Bearer ${userId}`,
        },
    })
        .then(res => {
            if (res.status === 200)
                return res.json()
            else if (res.status === 400) {
                return res.json()
                    .then(body => {
                        /* La línea `const mensaje = cuerpo.error` asigna el valor de la propiedad
                        `error` del cuerpo de la respuesta a la variable `mensaje`. Esto se hace
                        para extraer el mensaje de error del cuerpo de la respuesta y usarlo como
                        mensaje de error para el objeto `Error` que se lanza. */
                        const message = body.error

                        throw new Error(message)
                    })
            }
        })
}