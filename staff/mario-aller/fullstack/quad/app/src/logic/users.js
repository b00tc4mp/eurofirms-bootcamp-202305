import { validateString } from 'com'

/**
 * The `registerUser` function is used to register a new user by sending a POST request to the server
 * with the user's information, and it returns a promise that resolves if the registration is
 * successful or throws an error if there is a server error or validation error.
 * @param name - The name parameter represents the user's first name.
 * @param surname - The `surname` parameter is a string that represents the last name or family name of
 * the user.
 * @param zip - The `zip` parameter is used to store the user's zip code or postal code. It is a string
 * value.
 * @param email - The `email` parameter is a string that represents the user's email address.
 * @param password - The `password` parameter is a string that represents the user's password.
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
 * The `authenticateUser` function sends a POST request to the server to authenticate a user using
 * their email and password, and returns a promise that resolves to the response data or throws an
 * error if there is a server error or a validation error.
 * @param email - The `email` parameter is a string that represents the user's email address.
 * @param password - The `password` parameter is a string that represents the user's password.
 * @returns The function `authenticateUser` returns a Promise.
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
 * The `retrieveUser` function retrieves user data from an API using a token for authentication.
 * @param token - The `token` parameter is a string that represents the authentication token for the
 * user. It is used to authorize the request to retrieve user information from the API.
 * @returns The function `retrieveUser` returns a promise that resolves to the response body if the
 * status code is 200, or throws an error with the error message from the response body if the status
 * code is 400. If the status code is neither 200 nor 400, it throws a generic "server error" message.
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
 * The `updateUser` function updates a user's name, surname, and zip code by making a PATCH request to
 * the API with the provided token and data.
 * @param token - The `token` parameter is a string that represents the authentication token of the
 * user. It is used to authorize the user and ensure that only authenticated users can update their
 * information.
 * @param name - The `name` parameter is the new name that you want to update for the user.
 * @param surname - The `surname` parameter is a string that represents the user's last name.
 * @param zip - The `zip` parameter is a string representing a zip code.
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