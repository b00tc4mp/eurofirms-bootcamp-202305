// Añadir usuario a la lista
/**
 * La función `userToList` toma un nombre, correo electrónico y contraseña, los valida y luego envía una solicitud POST a un servidor con la información del usuario.
 * @param name - El parámetro de nombre es una cadena que representa el nombre del usuario.
 * @param email - El parámetro `email` es una cadena que representa la dirección de correo electrónico del usuario.
 * @param password - El parámetro `contraseña` es una cadena que representa la contraseña del usuario.
 * @returns una promesa.
 */
const userToList = function (name, email, password) {
    validateString(name, validateString.NAME)
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return fetch('http://localhost:9000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => {
            if (res.status = 201) return
            else return res.json().then(err => { throw new Error(err.error) })
        })
}

// Verificacion de clave de usuario (ret user Id)
/**
 * La función `userPasswordOK` toma un correo electrónico y una contraseña como parámetros, los valida y luego envía una solicitud POST a un servidor para autenticar al usuario.
 * @param email - El parámetro `email` es una cadena que representa la dirección de correo electrónico del usuario.
 * @param password - El parámetro `contraseña` es la contraseña ingresada por el usuario para la autenticación.
 * @returns La función `userPasswordOK` devuelve una Promesa.
 */
const userPasswordOK = function (email, password) {
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return fetch('http://localhost:9000/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (res.status = 201) return res.json().then(user => user.id)
            else return res.json().then(err => { throw new Error(err.error) })
        })
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

// Devuelve el id del usuario por email
// const userGetId = function (email) {
//     const users = db.users
//     const pos = users.findIndex(user => user.email === email)
//     if (pos !== -1) return users[pos].id
//     return null
// }