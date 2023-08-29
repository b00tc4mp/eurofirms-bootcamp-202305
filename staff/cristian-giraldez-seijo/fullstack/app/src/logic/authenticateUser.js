/**
 * The function `authenticateUser` is a JavaScript function that takes an email and password as
 * parameters, sends a POST request to a server to authenticate the user, and returns a token if the
 * authentication is successful.
 * @param email - The email parameter is a string that represents the user's email address.
 * @param password - The `password` parameter is a string that represents the user's password.
 * @returns The function `authenticateUser` returns a Promise that resolves to a token if the
 * authentication is successful. If the authentication fails, it throws an error with the corresponding
 * error message.
 */
function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error('email is not a string!')
    if (typeof password !== 'string') throw new Error('password is not a string!')

    return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (res.status === 200) return res.json()
                .then(body => {
                    const token = body
                    return token
                })
            else if (res.status === 400) return res.json().then(body => {
                const message = body.error
                throw new Error(message)
            })
        })
}
export default authenticateUser