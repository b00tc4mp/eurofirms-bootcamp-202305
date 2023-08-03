function retrieveMeetup(token, postId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')


    return fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
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
export default retrieveMeetup