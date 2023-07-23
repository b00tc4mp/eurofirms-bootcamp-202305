require('dotenv').config()

const toggleFavPost = require('./toggleFavPost')
const mongoose = require('mongoose')

mongoose. connect(`${process.env.MONGODB_URL}/test`)
    .then(() => toggleFavPost('64bd030edd2d42c41b803762', '64ad116c290ea073fc522884'))
    .then(posts => console.log('Toggle Fav Post Ok'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())



// const mongodb = require('mongodb')
// const context = require('./context')
// const toggleFavPost = require('./toggleFavPost')

// const { MongoClient } = mongodb

// const client = new MongoClient('mongodb://127.0.0.1:27017')

// client.connect()
//     .then(connection => {
//         const db = connection.db('data')
        
//         const users = db.collection('users')
//         const posts = db.collection('posts')

//         context.users =  users
//         context.posts =  posts

//         try{
//             return toggleFavPost('649da6b2244a755ed1c99a5e', '64ad116c290ea073fc522884')
//                 .then(posts =>{
//                     console.log('Toggle Fav Post Ok')
//                 })
//                 .catch(error => console.error(error)) 
//         }catch(error){
//             console.error(error)
//         }
//     })
//     .catch(error => console.error(error))
//     .finally(()=> client.close())