const mongodb = require('mongodb')
const context = require('./context')
const registerUser = require('./registerUser')

const{ MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        try{
            return registerUser('Benjamin Price', 'benjamin@price.com', '123123123')
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
    .catch(error => console.error(error))
    .finally(() => {
        client.close()
    })

