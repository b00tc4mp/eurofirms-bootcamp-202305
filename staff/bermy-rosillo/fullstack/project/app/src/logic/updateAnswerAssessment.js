function updateAnswerAssessment(token,studentId,testId,answerId,score,assessment){
    if(typeof token  !== 'string') throw new Error('token is not a string')
    if(typeof studentId !== 'string') throw new Error('studentId is not a string')
    if( typeof testId !== 'string') throw new Error('testId is not a string')
    if( typeof answerId !== 'string') throw new Error('answerId is not a string')
    if( typeof score !== 'number') throw new Error('score is not a number')
    if( typeof assessment !== 'string') throw new Error('assessment is not a string')

    return fetch(`${import.meta.env.VITE_API_URL}/students/${studentId}/tests/${testId}/answers/${answerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({score,assessment })
    })
        //response
        .then(res => {
            if (res.status === 204)
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
export default updateAnswerAssessment