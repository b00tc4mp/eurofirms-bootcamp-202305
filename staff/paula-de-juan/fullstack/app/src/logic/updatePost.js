function updatePost(token, postId, image, text) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
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
                .then(body => {
                    const message = body.error

                    throw new Error(message)
                })
    })
}
export default updatePost