const context = require('./context')
const stringValidator = require('./stringValidator')

function authenticateUser(mail, pwd) {
    stringValidator(mail, 'email')
    stringValidator(pwd, 'password')

    return context.users.findOne({ "email": mail })
        .then((user) => {
            if (user === null) throw new Error('El usuario no existe')
            if (user.password !== pwd) throw new Error('Clave incorrecta')
            return user._id.toString()
        })
}
module.exports = authenticateUser