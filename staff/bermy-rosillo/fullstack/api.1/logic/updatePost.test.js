const context = require('./context')
const{MongoClient} = require('mongodb')
const updatePost = require('./updatePost')

const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
.then(connection=>{

    const db = connection.db('data')

    context.users = db.collection('users')
    context.posts = db.collection('posts')

    try{
        return updatePost('649da817ca082f91d970772e','64a55e7a2807d7840c380c3c','https://lumiere-a.akamaihd.net/v1/images/pinocho_1940_01_97f54b38.jpeg?region=308,1,1082,1079',' hi pinocho')
        .then(()=>console.log('Updated post'))
        .catch(error=>console.error(error))

    }catch(error){
        console.error(error)
    }
})
.catch(()=>console.error(error))
.finally(()=>client.close())