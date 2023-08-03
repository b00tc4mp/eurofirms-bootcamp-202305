import { validateString } from './validators'

// Create a user
/**
 * The `registerUser` function is used to register a user by sending a POST request to the API with the
 * user's information, and it also performs validation on the input parameters.
 * @param name - The name parameter represents the user's first name.
 * @param surname - The `surname` parameter is a string that represents the last name or family name of
 * the user.
 * @param zip - The `zip` parameter in the `registerUser` function is used to specify the user's zip
 * code. It is a string that represents the postal code or ZIP code of the user's location.
 * @param email - The `email` parameter is the email address of the user that is being registered.
 * @param password - The `password` parameter is the password that the user wants to set for their
 * account.
 * @returns The function `registerUser` returns a Promise.
 */
export const registerUser = function (name, surname, zip, email, password) {
    validateString(name, validateString.NAME)
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, zip, email, password })
    })
        .then(res => {
            if (res.status === 201) return
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
export const authenticateUser = function (email, password) {
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (res.status === 200) return res.json()
            else return res.json().then(body => { throw new Error(body.error) })
        })
}

// Devuelve usuario público (ret objeto de la lista del usuario con token)
/**
 * La función `retrieveUser` realiza una solicitud para recuperar datos de usuario de un servidor utilizando un token de autorización.
 * @param token - El parámetro `token` es el token de autenticación o el token de acceso del usuario. Se utiliza para autorizar la solicitud para recuperar información del usuario del servidor.
 * @returns La función `retrieveUser` devuelve una promesa que se resuelve en el objeto del usuario si la solicitud de recuperación es exitosa (código de estado 200). Si la solicitud de recuperación no tiene éxito, arroja un error con el mensaje de error recibido del servidor.
 */
export const retrieveUser = function (token) {
    validateString(token, validateString.REGULAR)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
            if (res.status === 200) return res.json().then(user => user)
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
