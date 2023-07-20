/**
 * The function `registerUser` sends a POST request to a server with user information and returns a
 * promise that resolves if the request is successful or throws an error if there is a validation
 * error.
 * @param name - The name parameter is the name of the user that is being registered.
 * @param email - The email parameter is the email address of the user that is being registered.
 * @param password - The password parameter is the password that the user wants to set for their
 * account.
 * @returns a promise.
 */
function registerUser(name, email, password) {

    return fetch('http://localhost:9000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => {
            if (res.status === 201) return
            else if (res.status === 400) return res.json().then(error => { throw new Error(error.error) })
        })
}
export default registerUser