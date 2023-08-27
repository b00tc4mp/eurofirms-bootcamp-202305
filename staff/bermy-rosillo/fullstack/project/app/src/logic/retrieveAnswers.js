function retrieveAnswers(token,studentId,testId){
    if (typeof token !== 'string') throw new Error('token is not a string')
    if (typeof studentId !== 'string') throw new Error('studentId is not a string')
    if (typeof testId !== 'string') throw new Error('testId is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/answers/${studentId}/${testId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
       //response from server
       .then(res => {
        if (res.status === 400) {
            return res.json()
                .then(body => {

                    throw new Error(body.error)
                })

        } else if (res.status === 200) {
            return res.json()
        }
        else
            throw new Error('server error')
    })

}
export default retrieveAnswers