function deletePost(token, postId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    return fetch(`http://localhost:9000/posts/${postId}`, {
        method: 'DELETE',   
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(res => {
            if (res.status === 204)
                return 
            else if (res.status === 400) {
                return res.json()
                    /* El bloque `.then(body => { ... })` está manejando la respuesta del servidor
                    cuando el código de estado es 400. Está analizando el cuerpo de la respuesta
                    como JSON y extrayendo la propiedad `error` de él. Luego, arroja un nuevo objeto
                    `Error` con el mensaje de error extraído. Esto permite que el código de llamada
                    detecte el error y lo maneje adecuadamente. */
                    .then(body => {
                        const message = body.error

                        throw new Error(message)
                    })
            }
        })
}

// findIndex: para encontrar el indice 
// splice: para modificar un arrego eliminado, reempladado o agregado