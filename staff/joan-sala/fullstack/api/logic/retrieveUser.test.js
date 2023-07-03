const retrieveUser = require('./retrieveUser')
const context = require('./context')
const mongodb = require('mongodb')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()

    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')

        context.users = users

        try{
            return retrieveUser('64a07bf8fd76be0f9306ec87')
                .then(user => {
                    console.log('User retrieved', user)
                })
                .catch(error => {
                    console.error(error)
                })
        }catch(error){
            console.error(error)
        }
    })
    .finally(()=> {
        client.close()
    })
