function updateAnswerAssessment(token,studentId,testId,answerId,score,assessment){
    if(token !== 'string') throw new Error('token is not a string')
    if(studentId !== 'string') throw new Error('studentId is not a string')
    if(testId !== 'string') throw new Error('testId is not a string')
    if(answerId !== 'string') throw new Error('answerId is not a string')
    if(score !== 'number') throw new Error('score is not a number')
    if(assessment !== 'string') throw new Error('assessment is not a string')

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