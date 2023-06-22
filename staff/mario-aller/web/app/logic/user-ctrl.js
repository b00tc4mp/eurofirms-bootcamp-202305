// Añadir usuario a la lista
const userToList = function (name, email, password) {
    const users = db.users
    if (users.some((user) => user.email === email)) return false

    users.push(new User(name, email, password))
    db.users = users 
    return true
}

// Devuelve el id del usuario por email
const userGetId = function (email) {
    const users = db.users
    const pos = users.findIndex(user => user.email === email)
    if (pos !== -1) return users[pos].id
    return null
}

// Verificacion de clave de usuario (ret T/F)
const userPasswordOK = function (email, password) {
    const users = db.users
    const pos = users.findIndex(user => user.email === email)

    if (pos !== -1 && password === users[pos].password) return true
    return false
}

// Devuelve usuario público (ret objeto de la lista del usuario con id)
const userRetrieve = function (id) {
    const users = db.users
    if (id === undefined) return null
    let user = null
    const pos = users.findIndex(user => user.id === id)

    if (pos !== -1) {
        user = {
            id: id,
            name: users[pos].name,
            email: users[pos].email
        }
    }
    return user
}
