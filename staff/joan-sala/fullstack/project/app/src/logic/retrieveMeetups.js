/**
 * The function `retrieveMeetups` retrieves meetups using a token for authentication.
 * @param token - The `token` parameter is a string that represents the authentication token used to
 * authorize the request to retrieve meetups.
 * @returns The function `retrieveMeetups` returns a promise that resolves to the JSON response from
 * the API if the response status is 200. If the response status is 400, it throws an error with the
 * error message from the response body.
 */
function retrieveMeetups(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')

        return fetch(`${import.meta.env.VITE_API_URL}/meetups`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => {
                if (res.status === 200)
                    return res.json()
                else if (res.status === 400)
                    return res.json()
                        .then(body => {
                            const message = body.error

                            throw new Error(message)
                        })
            })
}
export default retrieveMeetups