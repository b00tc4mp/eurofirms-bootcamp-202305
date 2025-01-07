const context = require('./context')
const mongodb = require('mongodb')
const retrievePost = require('./retrievePost')

const {MongoClient} = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection =>{
        context.users = connection.db('data').collection('users')
        context.posts = connection.db('data').collection('posts')

        try {
            return retrievePost('649da1a35792d969ba2738cb', '64a3fa31662731c31cce2b39')
            .then(post => console.log(post))
            .catch(error => console.error(error))
        } catch (error){
            console.error(error)
        }

    })
    .catch(error => console.error(error))
    .finally(()=> client.close())