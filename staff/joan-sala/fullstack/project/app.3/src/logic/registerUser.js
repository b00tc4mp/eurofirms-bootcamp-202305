function registerUser(name, email, password, image) { //validaciones sincronas
    if(typeof name !== 'string') throw new Error('Name is not a string')
    if(typeof email !== 'string') throw new Error('Email is not a string')
    if(typeof password !== 'string') throw new Error('Password is not a string')
    if(typeof image !== 'string') throw new Error('Image is not a string')

    //Llamada al servidor
    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, password, image})
    })
    .then(res => {
        if(res.status === 201)
            return
        else if(res.status === 400){
            return res.json()
                .then(body => {
                    const message = body.error
                    throw new Error(message)

                })
        }
    })
}
export default registerUser