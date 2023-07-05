const createPost = require('./createPost')
const mongodb = require('mongodb')
/* La línea `const context = require('./context')` está importando el módulo `context` desde el archivo
`context.js`. Esto permite que el código acceda y use las variables y funciones definidas en el
módulo `contexto`. */
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

/* `client.connect()` está estableciendo una conexión con el servidor MongoDB. */
client.connect()
    .then(connection => {

        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

      
       /* El bloque `try {` se usa para encerrar una sección de código que potencialmente puede arrojar
       un error. Le permite detectar y manejar cualquier error que ocurra dentro del bloque. En este
       fragmento de código específico, el bloque `try {` se usa para detectar cualquier error que
       pueda ocurrir al llamar a la función `createPost`. Si ocurre un error, será capturado y
       registrado en la consola usando `console.error(error)`. */
        try {
            return createPost('64a330587f2ec958222f113e', 'http://image.com', 'feliz cumple pau')
                /* El código `.then(() => console.log('post created')).catch(error =>
                console.error(error))` se usa para manejar el resultado de la función `createPost`. */
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            /* `console.error(error)` es un método en JavaScript que registra un mensaje de error en la
            consola. En este código, se usa para registrar cualquier error que ocurra durante la
            ejecución de la función `createPost`. Si se produce un error, se registrará en la
            consola con fines de depuración. */
            console.error(error)
        }
    })
    /* `.catch(error => console.error(error))` es un bloque catch que se usa para manejar cualquier
    error que pueda ocurrir durante la ejecución de la función `createPost`. Si ocurre un error,
    este bloque lo detectará y el mensaje de error se registrará en la consola usando
    `console.error(error)`. Esto es útil para depurar e identificar cualquier problema que pueda
    surgir durante la ejecución del código. */
    .catch(error => console.error(error))
    /* `.finally(() => client.close())` es un método en JavaScript que se utiliza para especificar una
    función de devolución de llamada que se ejecutará independientemente de si la promesa se cumple
    o se rechaza. En este código, se usa para cerrar la conexión del cliente MongoDB después de que
    se haya ejecutado la función `createPost` y se hayan manejado los errores. Esto garantiza que la
    conexión se cierre correctamente y que se liberen recursos, independientemente del resultado de
    la ejecución del código. */
    .finally(() => client.close())
