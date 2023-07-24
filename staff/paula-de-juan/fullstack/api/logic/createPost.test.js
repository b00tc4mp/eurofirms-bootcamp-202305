require('dotenv').config()
const createPost = require('./createPost')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => {

        /* Logica antigua de MONGODB
        const db = connection.db('data')
        const users = db.collection('users')
        context.users = users
        const posts = db.collection('posts')
        context.posts = posts
        */

        try {
            return createPost ('64bdd85198a00a43b46d04ee', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Juan_de_Miranda_Carreno_002.jpg', 'Carlos II el Hechizado de los Austrias')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())