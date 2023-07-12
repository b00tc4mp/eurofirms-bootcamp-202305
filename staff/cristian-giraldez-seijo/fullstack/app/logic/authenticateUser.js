/**
 * The function `authenticateUser` sends a POST request to a server to authenticate a user with their
 * email and password, and returns the user's ID if successful.
 * @param email - The email parameter is a string that represents the user's email address.
 * @param password - The password parameter is a string that represents the user's password.
 * @returns The function `authenticateUser` returns a Promise that resolves to the `userId` if the
 * authentication is successful. If there is an error, it throws an Error with the error message.
 */
function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error('email is not a string!')
    if (typeof password !== 'string') throw new Error('password is not a string!')

    return fetch('http://localhost:9000/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (res.status === 200) return res.json()
                .then(body => {
                    const userId = body
                    return userId
                })
            else if (res.status === 400) return res.json().then(body => {
                const message = body.error
                throw new Error(message)
            })
        })
}