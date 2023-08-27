function createAnswer(token,testId,answer){
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof testId !== 'string') throw new Error('testId is not a string')
    if (typeof answer !== 'string') throw new Error('answer is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/answers/tests/${testId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({ answer })
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
export default createAnswer