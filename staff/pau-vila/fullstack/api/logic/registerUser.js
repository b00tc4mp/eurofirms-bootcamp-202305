const context = require('./context')
const { validateName, validateEmail, validatePassword } = require('./helpers/validators')

function registerUser(name, email, password) {
    validateName(name)
    validateEmail(email)
    validatePassword(password)

    /* `return context.users.findOne({ email })` is querying the `users` collection in the `context`
    object to find a document that matches the given email. It uses the `findOne` method to find the
    first document that matches the query. The query is `{ email }`, which is a shorthand syntax for
    `{ email: email }`, where `email` is the value passed as a parameter to the function. */
    /* `return context.users.findOne({ email })` is querying the `users` collection in the `context`
    object to find a document that matches the given email. It uses the `findOne` method to find the
    first document that matches the query. The query is `{ email }`, which is a shorthand syntax for
    `{ email: email }`, where `email` is the value passed as a parameter to the function. */
    return context.users.findOne({ email })
        .then(user => {
            if (user) throw new Error('user already exist')

            return context.users.insertOne({ name, email, password })
        })
        .then(() => { })
}

module.exports = registerUser
