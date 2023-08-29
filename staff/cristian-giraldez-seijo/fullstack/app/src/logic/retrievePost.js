/**
 * The function retrieves a post from an API using a token and post ID, and throws an error if the
 * token or post ID is not a string.
 * @param token - The token parameter is a string that represents the authentication token required to
 * access the API.
 * @param postId - The postId parameter is the unique identifier of the post that you want to retrieve.
 * @returns The function `retrievePost` is returning a Promise.
 */
function retrievePost(token, postId) {
if (typeof token !== 'string') throw new Error('token is not a string')
if (typeof postId !== 'string') throw new Error('postId is not a string')

return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
headers: {
Authorization: `Bearer ${token}`
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
export default retrievePost