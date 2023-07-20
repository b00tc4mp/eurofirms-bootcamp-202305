/**
 * The function `retrieveUser` retrieves user data from a server using a token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token for the
 * user. It is used to authorize the request to retrieve user information from the server.
 * @returns The function `retrieveUser` returns a promise that resolves to the JSON response from the
 * API if the response status is 200. If the response status is 400, it throws an error with the error
 * message from the response body.
 */
function retrieveUser(token) {
    if (typeof token !== 'string') throw new Error('token is not a string!')

    return fetch('http://localhost:9000/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else if (res.status === 400) {
                return res.json()
                    .then(body => { throw new Error(body.error) })
            }
        })
}
export default retrieveUser