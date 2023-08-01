function registerUser(name, password, email, role) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof role !== 'string') throw new Error('role is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password, email, role })
    })
        .then(res => {
            if (res.status === 201)
                return
            else if (res.status === 400)
                return res.json()
                    .then(body => {
                        throw new Error(body.error)
                    })
            else
                throw new Error('server error')
        })

}
export default registerUser