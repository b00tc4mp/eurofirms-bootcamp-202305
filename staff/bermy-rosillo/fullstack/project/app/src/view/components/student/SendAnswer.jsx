import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveTest from '../../../logic/retrieveTest'
import createAnswer from '../../../logic/createAnswer'

function SendAnswer(props) {
    console.log('Send answer->render')

    const [test, setTest] = useState()
   
    useEffect(() => {
        try {
            retrieveTest(context.token, props.testId)
                .then(test => setTest(test))
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
            const answer = event.target.answer.value
            createAnswer(context.token, props.testId, answer)
                .then(() => {
                    alert('answer sent')

                    props.onReturnHome()
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="test-view">
        <h1>Test</h1>
        {test && test &&
            <div className="test-form" >

                <h3>Title: {test.title}</h3>
                <h3>Question: {test.description}</h3>
                <h3>Attemps: {test.attemps}</h3>
                
                <form className="answers-form" onSubmit={handleSubmitAnswer}>
                
                    <label htmlFor="myAnswer">My Answer: </label>
                    <textarea id="myAnswer" type="text" rows="4" cols="20" ></textarea>
                    <button type="submit" className="btn-send">Send</button>
                    <button className="btn-cancel"onClick={handleCancelAnswer} >Cancel </button>
                </form>
            </div>
        }

    </div>
}
export default SendAnswer
