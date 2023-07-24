require('dotenv').config()
const retrieveUser = require('./retrieveUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/data`)
    .then(() => {
        
        /* Esto es de mongo de la version antigua ya nada de nada se borra
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts*/

        try{ 
            return retrieveUser
            ('64a5b5ad9d5b33a3ba4a28fd')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())