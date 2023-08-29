/**
 * The function `retrieveUser` retrieves user data from a server using a user ID as authorization.
 * @param userId - The `userId` parameter is the unique identifier of the user whose information we
 * want to retrieve. It should be a string.
 * @returns The function `retrieveUser` returns a promise.
 */
function retrieveUser(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string!')

    return fetch('http://localhost:9000/users', {
        headers: {
            Authorization: `Bearer ${userId}`
        }
    })
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else if (res.status === 400) {
                return res.json()
                    .then(body => { throw new Error(body.error) })
            }
        })
}