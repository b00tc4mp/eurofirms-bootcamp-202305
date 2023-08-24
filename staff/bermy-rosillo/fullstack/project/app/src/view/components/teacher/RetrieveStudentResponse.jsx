import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveTest from '../../../logic/retrieveTest'
import retrieveAnswers from "../../../logic/retrieveAnswers"
import updateAnswerAssessment from "../../../logic/updateAnswerAssessment"

function RetrieveStudentResponse(props) {
    console.log('retrieve student response')

    const [test, setTest] = useState()
    const [answers, setAnswers] = useState()

    useEffect(() => {
        try {
            retrieveTest(context.token, props.testId)
                .then(test => setTest(test))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        try {
            retrieveAnswers(context.token, props.studentId, props.testId)
                .then(answers => setAnswers(answers))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }, [])

    const handleCancelResponse = () => {

        props.onReturnStudentList()

    }
    //--
    const handleSubmitAnswerAssessment = (event) => {
        event.preventDefault()
        try {
            const score = Number(event.target.score.value)
            const assessment = event.target.assessment.value
            const answerId = event.target.answerId.value
            updateAnswerAssessment(context.token, props.studentId, props.testId, answerId, score, assessment)
                .then(() => {
                    alert('assessment sent')
                    
                    props.onReturnStudentList()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="test-view">

        {test && answers &&
            <div className="test-form" >

                <h3>Subject: {test.subject}</h3>
                <h3>Title: {test.title}</h3>
                <h3>Description: {test.description}</h3>
                <h3>Attemps: {test.attemps}</h3>

                <div className="answers-view">


                    <h1>Student answers</h1>
                    {answers && answers.map(answer => {
                        return <article key={answer.id}>
                            <h3>Name: {answer.student.name}</h3>
                            <h3>Answer:{answer.description}</h3>
                            {/* <label htmlFor="answer">Description</label>
                                <textarea id="answer" type="text" rows="4" cols="50" deafaultValue={answer.description}></textarea> */}
                            <h3>Date:{answer.date}</h3>
                            <form className="answers-form" onSubmit={handleSubmitAnswerAssessment}>
                                <input type="hidden" id="answerId" defaultValue={answer.id}></input>
                                <label htmlFor="score">Score: </label>
                                <input id="score" type="text" defaultValue={answer.score} /> 
                            
                                <label htmlFor="assessment">assessment: </label>
                                <textarea id="assessment" type="text" rows="4" cols="20" defaultValue={answer.assessment} ></textarea>
                                <button type="submit"className="btn-send" >Send</button>
                                <button className="btn-cancel" onClick={handleCancelResponse} >Cancel </button>
                            </form>
                        </article>
                    })}

                </div>  
            </div>
        }
    </div>

}

export default RetrieveStudentResponse