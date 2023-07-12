/* The code is establishing a connection to a MongoDB database and creating a new post using the
`createPost` function. */
const context = require('./context')
const mongodb = require('mongodb')
const createPost = require('./createPost')
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
            return createPost('649da70890d9f163cdc8b060', 'https://img2.rtve.es/i/?w=1600&i=1565264925747.jpg', 'Abbey Road')
                .then(() => console.log('New Post Created!'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error=>console.error(error))
    .finally(()=>client.close())