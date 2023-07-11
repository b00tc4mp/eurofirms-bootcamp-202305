const context = require('./context')
const mongodb =  require('mongodb')//dependencias
const authenticateUser = require('./authenticateUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017') 

client.connect()
.then(connection => {
    const db = connection.db('data')
    const users = db.collection('users')
    const pots = db.collection('posts')

    context.users =  users //guardado de el manejador para alojar herramientas que todo el usuario utiliza
    context.posts =  context.posts

    try{ //captura/detecta cualquier tipo de error
        return authenticateUser('peter@pan.com', '123123123')
        .then(userId => console.log('User authenticated', userId))
        .catch(error => console.error(error))
    } catch(error){
        console.error(error)
    }
})
.catch(error => console.error(error))
.finally(()=>{
    client.close()
})



