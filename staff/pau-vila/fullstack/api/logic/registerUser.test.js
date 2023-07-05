const registerUser = require('./registerUser')
/* The code is importing the `mongodb` module and the `context` module. */
const mongodb = require('mongodb')
const context = require('./context')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    /* The `.then(connection => { ... })` block is a promise chain that is executed after successfully
    connecting to the MongoDB database. */
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        /* El código `context.users = users` y `context.posts = posts` está asignando la colección
        `users` y `posts` de la base de datos MongoDB a las propiedades `users` y `posts` del objeto
        `context`. */
        context.users = users
        context.posts = posts

        try {
            return registerUser(users, 'Viuda Negra', 'viuda@negra.com', '1234')
                .then(() => console.log('user created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    /* The `.catch(error => console.error(error))` is a catch block that is used to handle any errors
    that occur during the execution of the `registerUser` function or the connection to the MongoDB
    database. If an error occurs, it will be passed to the `console.error` function, which will log
    the error message to the console. */
    .catch(error => console.error(error))
    .finally(() => client.close())