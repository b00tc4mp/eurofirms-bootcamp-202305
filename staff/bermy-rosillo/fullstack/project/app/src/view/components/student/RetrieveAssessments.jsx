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
        <h1>Test</h1>
        {arrayTests && arrayTests.map(test => {
            return <article key={test.id} className="test-information">
                <h3>{test.subject}</h3>
                <h3>{test.title}</h3>
                <h3>{test.description}</h3>
                <h3>{test.score}</h3>
                <h3>{test.assessment}</h3>

                {test.ans.map((item,indexItem) => <h3 key={test.id+indexItem}>{item}</h3>)}
                
            </article>
        })}
        <button className="btn-cancel"onClick={handleCancelButton} >Cancel </button> 
        </div>




    




}
export default RetrieveAssessments
