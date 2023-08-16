import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveTest from '../../../logic/retrieveTest'

function RetrieveStudentResponse(props) {
    console.log('retrieve student response')

    const [View, setView] = useState('')
    const [user, setUser] = useState()
    
    useEffect(() => {
        try {
            retrieveTest(context.token,props.testId)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, 

    [])

    const handleCancelStudentResponse = (event) => {
        event.preventDefault()
        //setView(null)
        //props.on
    }

    // TODO useeffect  retrieve test y retrive answer con un promise all



    return <main className="create-test-view">
        <h1>Student response</h1>
        {test && answer &&
            <form className="create-test-form" >
                <label htmlFor="student">Student {props.userName}</label>

                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" defaultValue={test.subjet} />

                <label htmlFor="title">Title</label>
                <input id="title" type="text" />

                <label htmlFor="descrption">Description</label>
                <textarea id="descrption" type="text" rows="4" cols="50"></textarea>

                <label htmlFor="attemps">Attemps</label>
                <input id="attemps" type="text" />

                <label>Answers</label>

                <label htmlFor="description-response">Description</label>
                <textarea id="description-response" type="text" rows="4" cols="50"></textarea>

                <label htmlFor="score">Score</label>
                <input id="score" type="text" />

                <label htmlFor="assessment">assessment</label>
                <textarea id="assessment" type="text" rows="4" cols="50"></textarea>

                <button type="submit" >Send</button>
                <button type="submit" onClick={handleCancelStudentResponse} >Cancel </button>
            </form>
        }
    </main>

}

export default RetrieveStudentResponse