//app retrieve test
function retrieveTest(token,testId) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof testId !== 'string') throw new Error('testId is not a string')
    
    return fetch(`${import.meta.env.VITE_API_URL}/tests/${testId}`, {
        headers: {
            Authorization: `Bearer ${token}`    
        },
    })
        .then(res => {
            if (res.status === 200)
                return res.json()
            else if (res.status === 400)
                return res.json()
                    .then(body => {
                        throw new Error(body.error)
                    })
            else
                throw new Error('server error')
        })

}
export default retrieveTest