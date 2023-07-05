const registerUser = require('./registerUser')
const mongodb = require('mongodb')
const context = require('./context')

/* `const { MongoClient } = mongodb` is using object destructuring to extract the `MongoClient` object
from the `mongodb` module. This allows us to use the `MongoClient` object directly without having to
reference it through the `mongodb` namespace. */
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
            return registerUser('649da6717f2ec958222f113c')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => client.close())