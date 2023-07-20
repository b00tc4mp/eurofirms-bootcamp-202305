/**
 * The function `deletePost` takes a token and a postId as parameters, and sends a DELETE request to
 * the server to delete a post with the specified postId, using the token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to authorize the deletion of the post. This token is typically obtained after a user logs in or
 * authenticates with the server. It is used to verify the identity and permissions of the user making
 * the request.
 * @param postId - The `postId` parameter is the unique identifier of the post that you want to delete.
 * It is expected to be a string.
 * @returns The function `deletePost` returns a promise. If the HTTP response status is 204 (No
 * Content), the promise resolves with no value. If the status is 400 (Bad Request), the promise
 * rejects with an error message obtained from the response body.
 */
function deletePost(token, postId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    return fetch(`http://localhost:9000/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.status === 204)
                return
            else if (res.status === 400)
                return res.json()
                    .then(body => { throw new Error(body.error) })
        })
}
export default deletePost