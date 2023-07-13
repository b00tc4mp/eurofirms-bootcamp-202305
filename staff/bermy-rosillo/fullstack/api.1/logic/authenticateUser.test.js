//importing packcages
const mongodb = require('mongodb')
const context = require('./context')
const authenticateUser = require('./authenticateUser')
//destructuring
const { MongoClient } = mongodb 

const client = new MongoClient('mongodb://127.0.0.1:27017')
client.connect()
    .then(conenction => {
        //conectar a bd 
        const db = conenction.db('data')
        //guardar coleccion
        const users = db.collection('users')
        //guardar en context.users los usuarios
        context.users = users

        try {
            return authenticateUser('pin@ocho.co','123123123')
                .then(userId => console.log('user authenticaed:', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .finally(() => client.close())