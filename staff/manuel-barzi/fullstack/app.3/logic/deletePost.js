function deletePost(token, postId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof postId !== 'string') throw new Error('postId is not a string')

    return fetch(`http://localhost:9000/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
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