//import Test  from "../components/student/Test"
import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import retrieveStudentAnswers from '../../logic/retrieveStudentAnswers'
//components
import SendAnswer from "../components/student/SendAnswer"

function StudentHome(props) {
    console.log('student home-render')
    const [view, setView] = useState('student-home')
    const [user, setUser] = useState(null)
    const [answers, setAnswers] = useState()

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        try {
            retrieveStudentAnswers(context.token)
                .then(answers => setAnswers(answers))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }, [])

    const handleLoggedOut = () => {
        context.token = null
        setUser(null)

        props.onLoggedOutClick()
    }
    //--
    const handleOnReturnHome =()=>{
        setView('student-home')
    }

    const handleSendAnswer =(event,answerId)=>{
        event.preventDefault()
        setAnswers(answerId)
        setView('send-answer')
    }

    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>

        <div className="search-tests">
                    
                {answers && answers.map(answer => {
                    return <article key={answer.id}>
                        
                           <h3>Test: <a href="" onClick={(event)=>handleSendAnswer(event,answer.id)}>{answer.test.subject}</a></h3> 
                          {/* <h3>Description: <a href="" >{answer.description}</a></h3>  */}
                    </article>
                })}

        {view === 'send-answer' && <SendAnswer user={user} testId={testId} onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />} 
        </div>

        <footer className="home-footer">

        </footer>
    </div>
}
export default StudentHome