/**
 * The function `retrievePosts` retrieves posts from a server using a token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token used to
 * authorize the request to retrieve posts.
 * @returns The function `retrievePosts` returns a promise that resolves to the response body if the
 * status code is 200, or throws an error with the error message from the response body if the status
 * code is 400.
 */
function retrievePosts(token) {
    if (typeof token !== 'string') throw new Error('token is not a string!')

    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.status === 200) return res.json()
            else if (res.status === 400) return res.json()
                .then(body => { throw new Error(body.error) })
        })
}
export default retrievePosts