require('dotenv').config()

const registerUser = require('./registerUser')
const retrieveUser = require('./retrieveUser')
const authenticateUser = require('./authenticateUser')
const createPost = require('./createPost')
const retrievePosts = require('./retrievePosts')
const retrievePost = require('./retrievePost')
const mongoose = require('mongoose') //libreria

mongoose.connect(`${process.env.MONGODB_URL}/test`)
.then(()=> registerUser('pinocho','pin4@ocho.com','123123123')
        .then(()=>console.log('User created'))
        .then(()=> authenticateUser('pin2@ocho.com','123123123'))
        .then(userId=>{
            console.log({userId})
            return retrieveUser(userId)
            .then(user=>{
                console.log(user)
                return createPost(userId, 'url-image', 'lalala')
            })
            .then(()=>{
                console.log('post created')

                return retrievePosts(userId)
            })
            .then(posts=>{
                console.table(posts)
                return retrievePost(userId, posts[0].id)
                .then(post=>{
                    console.log(post)
                    console.table(posts)
                    console.log({userId})
                })
            })
        })
        .catch(error=>console.error(error.message))
)
.catch(error=>console.error(error))
.finally(()=>mongoose.disconnect())