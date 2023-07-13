const context = require('./context')
const { ObjectId } = require('mongodb')

function retrieveUser(id) {
    try {

        return context.users.findOne({ "_id": new ObjectId(id) })
            .then((user) => {
                if (user === null) throw Error('El usuario no existe')
                delete user.password
                delete user._id
                return user
            })
            .catch(err => console.error(err))
    } catch (err) {
        console.error(err)
    }
}
module.exports = retrieveUser