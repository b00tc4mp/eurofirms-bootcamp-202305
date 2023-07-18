// Añadir usuario a la lista
/**
 * La función `registerUser` toma un nombre, correo electrónico y contraseña, los valida y luego envía una solicitud POST a un servidor con la información del usuario.
 * @param name - El parámetro de nombre es una cadena que representa el nombre del usuario.
 * @param email - El parámetro `email` es una cadena que representa la dirección de correo electrónico del usuario.
 * @param password - El parámetro `contraseña` es una cadena que representa la contraseña del usuario.
 * @returns una promesa.
 */
const registerUser = function (name, email, password) {
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
            else return res.json().then(body => { throw new Error(body.error) })
        })
}

// Verificacion de clave de usuario (ret user Id)
/**
 * La función `authenticateUser` toma un correo electrónico y una contraseña como parámetros, los valida y luego envía una solicitud POST a un servidor para autenticar al usuario.
 * @param email - El parámetro `email` es una cadena que representa la dirección de correo electrónico del usuario.
 * @param password - El parámetro `contraseña` es la contraseña ingresada por el usuario para la autenticación.
 * @returns La función `authenticateUser` devuelve una Promesa.
 */
const authenticateUser = function (email, password) {
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return fetch('http://localhost:9000/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (res.status === 200) return res.json()
            else return res.json().then(body => { throw new Error(body.error) })
        })
}

// Devuelve usuario público (ret objeto de la lista del usuario con id)
/**
 * La función `retrieveUser` realiza una solicitud para recuperar datos de usuario de un servidor utilizando un token de autorización.
 * @param id - El parámetro `id` es el token de autenticación o el token de acceso del usuario. Se utiliza para autorizar la solicitud para recuperar información del usuario del servidor.
 * @returns La función `retrieveUser` devuelve una promesa que se resuelve en el objeto del usuario si la solicitud de recuperación es exitosa (código de estado 200). Si la solicitud de recuperación no tiene éxito, arroja un error con el mensaje de error recibido del servidor.
 */
const retrieveUser = function (id) {
    validateString(id, validateString.REGULAR)

    return fetch('http://localhost:9000/users', { headers: { Authorization: `Bearer ${id}` } })
        .then(res => {
            if (res.status === 200) return res.json().then(user => user)
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
