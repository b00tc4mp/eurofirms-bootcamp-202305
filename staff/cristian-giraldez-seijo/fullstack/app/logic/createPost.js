/**
 * The function `createPost` sends a POST request to a server with the provided `userId`, `image`, and
 * `text` parameters, and handles different response statuses accordingly.
 * @param userId - The `userId` parameter is a string that represents the user's ID. It is used to
 * authorize the user when making the POST request to create a new post.
 * @param image - The `image` parameter is a string that represents the URL or file path of the image
 * to be included in the post.
 * @param text - The `text` parameter is a string that represents the text content of the post. It can
 * be any text that the user wants to include in their post.
 * @returns a Promise.
 */
function createPost(userId, image, text) {
    if (typeof userId !== 'string') throw new Error('userId is not a string!')
    if (typeof image !== 'string') throw new Error('image field is not a string!')
    if (typeof text !== 'string') throw new Error('the text is not a string!')

return fetch('http://localhost:9000/posts', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${userId}`,
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