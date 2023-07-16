/**
 * The function `updatePost` updates a post with a new image and text by making a PATCH request to a
 * server endpoint.
 * @param userId - The `userId` parameter is a string that represents the user's ID. It is used for
 * authorization purposes when making the API request to update the post.
 * @param postId - The `postId` parameter is the unique identifier of the post that you want to update.
 * It is a string value.
 * @param image - The `image` parameter is a string that represents the URL or file path of the image
 * associated with the post.
 * @param text - The `text` parameter is a string that represents the updated text content of the post.
 * @returns a Promise. If the HTTP response status is 204 (No Content), the Promise resolves with no
 * value. If the HTTP response status is 400 (Bad Request), the Promise rejects with an Error object
 * containing the error message from the response body.
 */
function updatePost(userId, postId, image, text) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if (typeof image !== 'string') throw new Error('image field is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')

    return fetch(`http://localhost:9000/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${userId}`,
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