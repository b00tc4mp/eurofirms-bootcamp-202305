import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveArrayStudentTests from "../../../logic/retrieveArrayStudentTests"

function RetrieveAssessments(props) {
    console.log('retrieve assessments->render')

    const [arrayTests, setArrayTests] = useState()
    
    useEffect(() => {
        
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
    
    return <div className="test-view">
        <h1>Answered tests</h1>
        <button className="btn-cancel"onClick={handleCancelButton} >Cancel </button> 
        {arrayTests && arrayTests.map(test => {
            return <article key={test.id} className="test-information">
                <h3>{test.subject}</h3>
                <h3>{test.title}</h3>
                <h3>{test.description}</h3>
                <h3>{test.score}</h3>
                <h3>{test.assessment}</h3>
                <h3>-------------------</h3>

                
                {test.ans.map((element,indexItem) => {
                return <>
                <h3 className="description" key={test.id+indexItem+"1"}>Answer:{element.description}</h3>
                <h3 className="score" key={test.id+indexItem+"2"}>Score: {element.score}</h3>
                <h3 className="assessment" key={test.id+indexItem+"3"}>Assesstment: {element.assessment}</h3>
                <h3>-----------------------------------------------</h3>
                </>})}
            </article>
        })}
        </div>




    




}
export default RetrieveAssessments
