/**
 * The function `retrievePost` retrieves a post from a server using the provided user ID and post ID.
 * @param userId - The `userId` parameter is a string that represents the user's ID. It is used to
 * authenticate the user and authorize access to the post.
 * @param postId - The `postId` parameter is the unique identifier of the post that you want to
 * retrieve. It is expected to be a string.
 * @returns The function `retrievePost` returns a promise that resolves to the response body if the
 * status code is 200, or rejects with an error if the status code is 400.
 */
function retrievePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    return fetch(`http://localhost:9000/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${userId}`
        }
    })
        .then(res => {
            if (res.status === 200)
                return res.json()
            else if (res.status === 400)
                return res.json()
                    .then(body => {
                        throw new Error(body.error)
                    })
        })
}