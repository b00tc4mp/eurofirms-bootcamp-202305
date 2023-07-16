/**
 * The function `deletePost` deletes a post by sending a DELETE request to the server with the provided
 * userId and postId.
 * @param userId - The `userId` parameter is a string that represents the user's ID. It is used to
 * authorize the deletion of the post.
 * @param postId - The `postId` parameter is the unique identifier of the post that you want to delete.
 * It is expected to be a string.
 * @returns a promise. If the HTTP DELETE request is successful and the response status is 204 (No
 * Content), the promise resolves with no value. If the response status is 400 (Bad Request), the
 * promise rejects with an error message obtained from the response body.
 */
function deletePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    return fetch(`http://localhost:9000/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${userId}`
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