import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveTest from '../../../logic/retrieveTest'
import retrieveAnswers from "../../../logic/retrieveAnswers"
import createAnswer from '../../../logic/createAnswer' //TODO

function SendAnswer(props) {
    console.log('Send answer->render')

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

    const handleCancelAnswer = () => {

        props.onReturnHome()

    }
    //--
    const handleSubmitAnswer = (event) => {
        event.preventDefault()
        try {
            
            //const answerId = event.target.answerId.value
            //updateAnswerAssessment(context.token, props.studentId, props.testId, answerId, score, assessment)
            createAnswer() //TODO
                .then(() => {
                    alert('answer sent')
                    
                    props.onReturnHome()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="student-test-view">
        <h1>Test</h1>
        {test && answers &&
            <div className="student-test-form" >

                <h3>Subject: {test.subject}</h3>
                <h3>Title: {test.title}</h3>
                <h3>Description: {test.description}</h3>
                <h3>Attemps: {test.attemps}</h3>

                <div className="student-answers-view">

                    <h1>Student answers</h1>
                    {answers && answers.map(answer => {
                        return <article key={answer.id}>
                            <h3>Name: {answer.student.name}</h3>
                            <h3>Answer:{answer.description}</h3>
                            {/* <label htmlFor="answer">Description</label>
                                <textarea id="answer" type="text" rows="4" cols="50" deafaultValue={answer.description}></textarea> */}
                            <h3>Date:{answer.date}</h3>
                            <form className="student-answers-form" onSubmit={handleSubmitAnswer}>
                                <input type="hidden" id="answerId" defaultValue={answer.id}></input>
                                
                                <label htmlFor="answer">answer: </label>
                                <textarea id="answer" type="text" rows="4" cols="20" ></textarea>
                                <button type="submit" >Send</button>
                                <button onClick={handleCancelAnswer} >Cancel </button>
                            </form>
                        </article>
                    })}

                </div>

               
               
            </div>
        }
   
    </div>
}
export default SendAnswer
