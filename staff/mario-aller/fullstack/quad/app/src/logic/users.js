import { validateString } from 'com'

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
    validateString(surname, validateString.NAME)
    validateString(zip)
    validateString(email, validateString.EMAIL)
    validateString(password, validateString.PASSWORD)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, zip, email, password })
    })
        .then(res => {
            switch (res.status) {
                case 201:
                    return
                case 400:
                    return res.json().then(body => { throw new Error(body.error) })
                default:
                    throw new Error('server error')
            }
        })
}
/**
 * The `authenticateUser` function is used to authenticate a user by sending their email and password
 * to the server.
 * @param email - The `email` parameter is a string that represents the user's email address.
 * @param password - The `password` parameter is a string that represents the user's password.
 * @returns The function `authenticateUser` returns a Promise that resolves to the response from the
 * API call.
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
            switch (res.status) {
                case 200:
                    return res.json()
                case 400:
                    return res.json().then(body => { throw new Error(body.error) })
                default:
                    throw new Error('server error')
            }
        })
}
/**
 * The function `retrieveUser` retrieves the name of a user using a token for authentication.
 * @param token - The `token` parameter is a string that represents the authentication token for the
 * user. It is used to authorize the request to retrieve the user's name from the API.
 * @returns The function `retrieveUser` returns a promise that resolves to the user object if the
 * fetch request is successful (status code 200). If the fetch request is not successful, it throws an
 * error with the error message from the response body.
 */
export const retrieveUser = function (token) {
    validateString(token, validateString.REGULAR)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(res => {
            switch (res.status) {
                case 200:
                    return res.json()
                case 400:
                    return res.json().then(body => { throw new Error(body.error) })
                default:
                    throw new Error('server error')
            }
        })
}
/**
 * The `updateUser` function sends a PATCH request to update a user's name, surname, and zip code,
 * using the provided token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token of the
 * user. It is used to authorize the user's request to update their information.
 * @param name - The `name` parameter is the new name of the user that you want to update.
 * @param surname - The `surname` parameter is a string that represents the user's last name.
 * @param zip - The `zip` parameter is a string representing the user's zip code.
 * @returns a Promise.
 */
export const updateUser = function (token, name, surname, zip) {
    validateString(token)
    validateString(name, validateString.NAME)
    validateString(surname, validateString.NAME)
    validateString(zip, validateString.INTEGER)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, zip })
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}