function createPost(userId, image, text) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')

    return fetch('http://localhost:9000/posts', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${userId}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    })
        .then(res => {
            if (res.status === 201)
                return
            else if (res.status === 400) {
                return res.json()
                    .then(body => {
                        const message = body.error

                        throw new Error(message)
                    })
            }
        })
}