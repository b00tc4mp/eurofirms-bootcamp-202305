/**
 * The function `retrieveUser` retrieves user data from an API using a token for authentication.
 * @param token - The `token` parameter is a string that represents the authentication token for the
 * user. It is used to authorize the request to retrieve user information from the API.
 * @returns The function `retrieveUser` returns a promise that resolves to the user object if the API
 * request is successful (status code 200). If the API request returns a status code of 400, the
 * function throws an error with the error message from the API response.
 */
function retrieveUser(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/users/`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`}
    })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .then(body => {
                        const user = body
                        return user
                    })
            else if (res.status === 400)
                return res.json()
                    .then(body => {
                        const message = body.error
                        throw new Error(message)
                    })
        })
}
export default retrieveUser