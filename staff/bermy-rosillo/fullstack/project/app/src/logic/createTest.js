function createTest(token, subject, title, description, attemps) {
    if (typeof subject !== 'string') throw new Error('subject is not a string')
    if (typeof title !== 'string') throw new Error('title is not a string')
    if (typeof description !== 'string') throw new Error('description is not a string')
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof attemps !== 'string') throw new Error('attemps is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/tests`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({ subject, title, description, attemps })
    })
        //response
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

export default createTest

