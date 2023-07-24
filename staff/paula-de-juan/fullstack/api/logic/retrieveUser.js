const { User } = require('../data/models')
const { ObjectId } = require('mongoose')
const { validateId } = require('./helpers/validators')

function retrieveUser(userId) {
    validateId(userId)
// Aqui modificamos y buscamos en lugar de con findOne
// findOne ({ _id: new ObjectId(userId) })

    return User.findById (userId, '-password').lean()
        .then(user => {
            if (!user) throw new Error('user not found')

            // SANITIZE ahora funciona con metodo lean
            delete user._id
            // esta linea de sanitize se sustituye por '-password'
            // delete user.password ya no nos hace falta

            return user
        })
}
module.exports = retrieveUser
