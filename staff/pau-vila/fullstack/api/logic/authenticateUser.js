const context = require ('./context')
const { validateEmail, validatePassword } = require('./helpers/validators')

function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)
    
    return context.users.findOne({ email })
    .then(user => {
        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong credentials')

        /* `return user._id.toString()` is converting the `_id` property of the `user` object to a
        string. The `_id` property is typically a unique identifier for the user in a database, and
        it is often represented as an ObjectId. By calling the `toString()` method on the `_id`, it
        converts the ObjectId to a string representation, which can be useful for further processing
        or displaying the user's ID in a certain format. */
        return user._id.toString()
    })
}
module.exports = authenticateUser