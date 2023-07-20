function authenticateUser(email, password) {
    if (typeof email !== 'string') throw new Error('Email is not a String')
    if (typeof password !== 'string') throw new Error('Password is not a String')

    return fetch('http://localhost:9000/users/auth', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(res => {

            if (res.status === 200)
                return res.json()
                    .then(token => token)

            else if (res.status === 400) {
                return res.json()
                    .then(error => {
                        throw new Error(error.error)
                    })
            }
        })
}
export default authenticateUser