function retrievePosts(token) {

    if (typeof token !== 'string') throw new Error('token is not a string')

    return fetch('http://localhost:9000/posts', { //http://localhost:9000/posts
        headers: {
            Authorization: `Bearer ${token}` //comillas invertidas
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
export default retrievePosts



