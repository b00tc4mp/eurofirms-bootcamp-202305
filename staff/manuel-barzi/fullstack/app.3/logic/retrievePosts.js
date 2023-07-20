function retrievePosts(token) {
    if (typeof token !== 'string') throw new Error('token is not string')

    return fetch('http://localhost:9000/posts', {
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
                        const message = body.error

                        throw new Error(message)
                    })
        })
}