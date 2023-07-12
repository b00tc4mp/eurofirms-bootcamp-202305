function registerUser(name, email, password) {

    if (typeof name !== 'string') throw new Error('Name is not a String')
    if (typeof email !== 'string') throw new Error('Email is not a String')
    if (typeof password !== 'string') throw new Error('Password is not a String')

    //request to API - check path 
    return fetch('http://localhost:9000/users', {
        method: 'POST',
        headers: { 'Content-type': 'application/ json' },
        body: JSON.stringify({ name, email, password })
    })
        //response from server
        .then(res => {
            if (res.status === 400) {
                return res.json()
                    .then(body => {

                        throw new Error(body.error)
                    })

            } else if (res.status === 200) {
                return // good result
            }
        })
}