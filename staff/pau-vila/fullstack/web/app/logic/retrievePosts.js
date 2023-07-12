function retrievePosts(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not string')

    return fetch('http://localhost:9000/posts', {
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
                        const message = body.Error
                        throw new Error(message)
                    })
        })

}


