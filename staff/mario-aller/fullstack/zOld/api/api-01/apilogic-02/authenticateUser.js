const context = require('./context')
const valid = require('./valid')

function authenticateUser(mail, pwd) {
        if (!valid(mail) ||
            !valid(pwd)) throw new Error('Datos inválidos')

        return context.users.findOne({ "email": mail })
            .then((user) => {
                if (user === null) throw Error('El usuario no existe')
                if (user.password === pwd) return user._id.toString()
                else throw new Error('Clave incorrecta')
            })

}
module.exports = authenticateUser  