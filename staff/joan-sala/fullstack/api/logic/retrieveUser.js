const context = require('./context')
const { ObjectId } = require('mongodb')//estructurar

function retrieveUser(userId) {
    //if(typeof userId !== 'string') throw new Error('userId is not a string')
    //if(userId === '') throw new Error('userId is empty')
    try {
        //Promesa
        return context.users.findOne({ _id: new ObjectId(userId) })

            //modificador a esa promesa
            .then(user => {
                if (!user) throw new Error('User not found')

                delete user._id
                delete user.password

                return user
            })
            .catch(error => {
                console.error(error)
            })
            
    } catch (eror) {
        console.error(error)
    }
}
module.exports = retrieveUser