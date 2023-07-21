function retrieveUser(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.status === 200)
                return res.json()
                    .then(body => {
                        const user = body

                        return user
                    })
            else if (res.status === 400)
                return res.json()
                    .then(body => {
                        const message = body.error

                        throw new Error(message)
                    })
        })
}

export default retrieveUser