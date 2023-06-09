// Verificacion de usuario (ret T/F)
const userExist = function (email) {
    const num = users.length

    for (let i = 0; i < num; i++) {
        if (email === users[i].email) return true;
    }
    return false;
}

// Verificacion de clave de usuario (ret T/F)
const userPasswordOK = function (email, password) {
    const num = users.length

    for (let i = 0; i < num; i++) {
        if (email === users[i].email) {
            if (password === users[i].password) return true;
            break;
        }
    }
    return false;
}

// Devuelve usuario público (ret objeto de la lista del usuario email)
const userRetrieve = function (email) {
    const num = users.length
    let user = null

    for (let i = 0; i < num; i++) {
        if (email === users[i].email) {
            user = {}
            user.name = users[i].name
            user.email = users[i].email
        }
    }
    return user
}

// Devuelve la lista de usuarios Completa
const userRetrieveAll = function () {
    return posts;
}

// Añadir usuario a la lista
const userToList = function (name, email, password) {
    const user = {}

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}