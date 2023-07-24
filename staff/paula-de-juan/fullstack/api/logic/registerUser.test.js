require('dotenv').config()
const registerUser = require('./registerUser')
const mongoose = require('mongoose')

mongoose.connect(`${process.env.MONGODB_URL}/data`)
    // Pregunta ¿No se quitaba connection por una funcion anonima () ???
    .then(connection => {
        // Y no se quitaba el context???
        //context.users = users
        //context.posts = posts

        try {
            return registerUser('Franz Ferdinand', 'franz@ferdinand.com', 'franciscoFernando')
                .then(() => console.log('user created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())