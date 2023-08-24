import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveStudentListTests from "../../../logic/retrieveStudentListTests"
import retrieveArrayStudentTests from "../../../logic/retrieveArrayStudentTests"

function RetrieveAssessments(props) {
    console.log('retrieve assessments->render')

    const [arrayTests, setArrayTests] = useState()
    const [answers, setAnswers] = useState()

    useEffect(() => {
        try {
            retrieveStudentListTests(context.token)
                .then(answers => setAnswers(answers))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
        try {
            retrieveArrayStudentTests(context.token)
                .then(arrayTests => setArrayTests(arrayTests))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }, [])

    const handleCancelButton = () => {

        props.onReturnHome()

    }
    //--
    return <div className="test-view">
        <h1>Test</h1>
        {answers && answers &&
            <div className="test-form" >

                <div className="answers-view">

                    {arrayTests && arrayTests.map(test => {
                        //test information TODO
                    })}
                    
                    {answers && answers.map(answer => {
                        return <article key={answer.id}>
                            <h1>Student answers</h1>
                            <h3>Answer:{answer.description}</h3>
                            {/* <label htmlFor="answer">Description</label>
                                <textarea id="answer" type="text" rows="4" cols="50" deafaultValue={answer.description}></textarea> */}
                            <h3>Date:{answer.date}</h3>
                        </article>
                    })}

                    <button className="btn-cancel"onClick={handleCancelButton} >Cancel </button>
                </div>
            </div>
        }
    </div>
}
export default RetrieveAssessments
