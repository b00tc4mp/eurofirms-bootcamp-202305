const context = require('./context')
const stringValidator = require('./stringValidator')

function registerUser(userName, mail, pwd) {
    stringValidator(userName, 'name')
    stringValidator(mail, 'email')
    stringValidator(pwd, 'password')

    return context.users.findOne({ "email": mail })
        .then((result) => {
            if (result) throw new Error('El usuario ya existe')
            return context.users.insertOne({ "name": userName, "email": mail, "password": pwd })
        })
}
module.exports = registerUser