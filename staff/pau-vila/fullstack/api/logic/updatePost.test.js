const context = require('./context')
const mongodb = require('mongodb')
const updatePost = require('./updatePost')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')
client.connect()
    .then(connection => {
        const db = connection.db('data')
        
        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        try {
            return updatePost('64a330587f2ec958222f113e', '64a4328d98619a2a3c7ab346', 'http://image.com/holamundo', 'hola mundo')
                .then(() => console.log('posts updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
        /* El `})` está cerrando la llamada al método `then` en la promesa `client.connect()`. Se utiliza para
        encadenar varios métodos `then` o `catch` juntos. */
    })
    .catch(error => console.error(error))
    .finally(() => client.close())




