const context = require ('./context')
const { ObjectId } = require('mongodb')
const { validateId } = require('./helpers/validators')

function retrieveUser(userId) {
   validateId(userId)

    return context.users.findOne({ _id: new ObjectId(userId)})
    .then(user => {
        if (!user) throw new Error('user not found')

        // sanitize: se refiere al proceso de limpiar, validar o desinfectar datos de entrada para asegurar que cumplan con ciertas normas.

        delete user._id
        delete user.password

        return user
    })
}

module.exports = retrieveUser
//objectId: para representar identificadores únicos de documentos.