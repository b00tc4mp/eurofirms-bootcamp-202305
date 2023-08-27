const registerUser = require('./registerUser')
const mongodb = require('mongodb') //libreria
const context = require('./context')


const {MongoClient} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(connection=>{
    //db conexion
    const db = connection.db('data')
    //coleccion
    const users = db.collection('users')

    context.users = users

    try{
        return registerUser('pinocho','pin2@ocho.com','123123123')
        .then(()=>console.log('User created'))
        .catch(error=>console.error(error.message))
    }catch(error){
        console.error(error)
    }
})
.catch(error=>console.error(error))
.finally(()=>client.close())