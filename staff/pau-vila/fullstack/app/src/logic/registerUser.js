function registerUser(name, email, password) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (typeof email !== 'string') throw new Error('email is not string')
    if (typeof password !== 'string') throw new Error('password is not string')

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => {
            if (res.status === 201)
                return
            else if (res.status === 400) {
                return res.json()
                    .then(body => {
                        const message = body.error
                       
                        throw new Error(message)
                    })}
            else
                throw new Error('server error')
        })
}
export default registerUser
