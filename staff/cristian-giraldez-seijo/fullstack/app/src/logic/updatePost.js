/**
 * The function `updatePost` is a JavaScript function that updates a post with a new image and text,
 * using a token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token for the
 * user making the request. This token is used to authorize the user and ensure that they have the
 * necessary permissions to update the post.
 * @param postId - The `postId` parameter is the unique identifier of the post that you want to update.
 * It is expected to be a string.
 * @param image - The `image` parameter is a string that represents the URL or file path of the image
 * you want to update for the post.
 * @param text - The `text` parameter is a string that represents the updated text content of the post.
 * @returns a Promise. If the HTTP response status is 204 (No Content), the Promise resolves with no
 * value. If the HTTP response status is 400 (Bad Request), the Promise rejects with an Error object
 * containing the error message from the response body.
 */
function updatePost(token, postId, image, text) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if (typeof image !== 'string') throw new Error('image field is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    })
        .then(res => {
            if (res.status === 204)
                return
            else if (res.status === 400)
                return res.json()
                    .then(body => { throw new Error(body.error) })
        })
}
export default updatePost