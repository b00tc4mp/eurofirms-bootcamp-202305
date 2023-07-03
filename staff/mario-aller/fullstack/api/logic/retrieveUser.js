const context = require('./context')
const { ObjectId } = require('mongodb')

function retrieveUser(id) {
    return context.users.findOne({ "_id": new ObjectId(id) })
        .then((user) => {
            if (user === null) throw Error('El usuario no existe')
            delete user.password
            delete user._id
            return user
        })
}
module.exports = retrieveUser