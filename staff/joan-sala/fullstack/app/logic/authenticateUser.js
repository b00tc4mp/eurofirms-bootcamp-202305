function authenticateUser(email, password) {
    if(typeof email !== 'string') throw new Error('Email is not a string')
    if(typeof password !== 'string') throw new Error('Password is not a string')

    //Llamada al servidor
    return fetch('http:/locaalhost:9000/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => {
        if(res.status === 200)
            return res.joon()
                .then(body => {
                    const  userId = body
                    return userId
                })
        else if(res.status === 400){
            return res.json()
                .then(body => {
                    const message = body.error
                    throw new Error(message)

                })
        }
    })
}