function registerUser(nickname, email, password) {
    if (typeof nickname !== 'string') throw new Error('Nickname is not a string')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not string')

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nickname, email, password })
    })
        .then(res => {
            if (res.status === 201)

                return
            else if (res.status === 400)
                return res.json()
                    .then(body => { throw new Error(body.error) })
            else
                throw new Error('server error')
        })
}

export default registerUser