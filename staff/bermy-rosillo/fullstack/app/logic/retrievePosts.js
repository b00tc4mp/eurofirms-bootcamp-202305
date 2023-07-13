function retrievePosts(userId) {

    if (typeof userId !== 'string') throw new Error('UserId is not a string')

    return fetch('http://localhost:9000/posts', { //http://localhost:9000/posts
        headers: {
            Authorization: `Bearer ${userId}` //comillas invertidas
        }
    })
        .then(res => {
            if (res.status === 400) {
                return res.json()
                    .then(body => {

                        throw new Error(body.error)
                    })
            } else if (res.status === 200)
                return res.json()
        })
}



