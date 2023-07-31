function registerUser(name, email, password, zip, phone) {
    if (typeof name !== 'string') throw new Error('name is not a string')
    if (typeof email !== 'string') throw new Error('email is not string')
    if (typeof password !== 'string') throw new Error('password is not string')
    if(typeof zipNumber !== 'number') throw new Error('zip is not a number')
    if(typeof phoneNumber !== 'number') throw new Error('phone is not a number')

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, zip, phone })
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
