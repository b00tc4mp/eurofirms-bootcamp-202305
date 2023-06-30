const context = require('./context')

function registerUser(userN, mail, pwd) {

    return context.users.insertOne({ "name": userN, "email": mail, "password": pwd })
        .catch(err => console.error(err))
}
module.exports = registerUser