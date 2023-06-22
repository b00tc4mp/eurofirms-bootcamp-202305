// Añadir usuario a la lista
const userToList = function (name, email, password) {
    if (users.some((user) => user.email === email)) return false

    users.push(new User(name, email, password))
    return true
}

// Devuelve el id del usuario por email
const userGetId = function (email) {
    const pos = users.findIndex(user => user.email === email)
    if (pos !== -1) return users[pos].id
    return null
}

// Verificacion de clave de usuario (ret T/F)
const userPasswordOK = function (email, password) {
    const pos = users.findIndex(user => user.email === email)

    if (pos !== -1 && password === users[pos].password) return true
    return false
}

// Devuelve usuario público (ret objeto de la lista del usuario con id)
const userRetrieve = function (id) {
    if (id === null) return null
    let user = null
    const pos = users.findIndex(user => user.id === id)

    if (pos !== -1) {
        user = {}

        user.id = id
        user.name = users[pos].name
        user.email = users[pos].email
    }
    return user
}
