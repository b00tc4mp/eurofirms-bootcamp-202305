const registerUser = require('./registerUser')
const mongodb = require('mongodb')
const context = require('./context')

const{ MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        context.users = users

        try{
            return registerUser('Benjamin Price', 'benjamin@price.com', '123')
            .then(()=>{
                console.log('User create')
            })
            .catch(error => {
                console.error(error)
            })

        }catch(error){
            console.error(erro)
        }
    })
    .finally(() => {
        client.close()
    })

