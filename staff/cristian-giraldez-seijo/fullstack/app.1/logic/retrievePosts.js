/**
 * The function retrieves posts from a server using a user ID for authentication.
 * @param userId - The `userId` parameter is a string that represents the user's ID. It is used to
 * authenticate the user and retrieve their posts from the server.
 * @returns The function `retrievePosts` returns a promise that resolves to the response body if the
 * status code is 200, or throws an error with the error message from the response body if the status
 * code is 400.
 */
function retrievePosts(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string!')

    return fetch('http://localhost:9000/posts', {
        headers: {
            Authorization: `Bearer ${userId}`
        }
    })
        .then(res => {
            if (res.status === 200) return res.json()
            else if (res.status === 400) return res.json()
                .then(body => { throw new Error(body.error) })
        })
}