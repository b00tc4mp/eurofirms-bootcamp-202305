/**
 * The function `createPost` sends a POST request to a server with a token, image, and text as
 * parameters, and returns a promise that resolves if the request is successful or throws an error if
 * the request fails.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to create a post. This token is used to authorize the user making the request.
 * @param image - The `image` parameter is a string that represents the URL or file path of the image
 * you want to include in the post.
 * @param text - The `text` parameter is a string that represents the text content of the post. It can
 * be any text that you want to include in the post.
 * @returns a Promise.
 */
function createPost(token, image, text) {
    if (typeof token !== 'string') throw new Error('token is not a string!')
    if (typeof image !== 'string') throw new Error('image field is not a string!')
    if (typeof text !== 'string') throw new Error('the text is not a string!')

return fetch('http://localhost:9000/posts', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({image, text})
})
.then(res => {
    if (res.status === 201) return
    else if (res.status === 400) {
        return res.json()
        .then(body => {throw new Error(body.error)})
    }
})
}
export default createPost