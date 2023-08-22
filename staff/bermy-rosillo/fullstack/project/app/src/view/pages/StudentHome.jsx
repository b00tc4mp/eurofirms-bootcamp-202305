//import Test  from "../components/student/Test"
import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import retrieveStudentAnswers from '../../logic/retrieveStudentAnswers'
import retrieveTeacherListTests from '../../logic/retrieveTeacherListTests'
//components
import SendAnswer from "../components/student/SendAnswer"

function StudentHome(props) {
    console.log('student home-render')
    const [view, setView] = useState('student-home')
    const [user, setUser] = useState(null)
    const [answers, setAnswers] = useState()
    const [testId, setTestId] = useState()
    const [tests, setTests] = useState()

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        /* try {
            retrieveStudentAnswers(context.token)
                .then(answers => setAnswers(answers))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        } */

        try {
            retrieveTeacherListTests(context.token)
                .then(tests => setTests(tests))
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
    const handleOnReturnHome = () => {
        setView('student-home')
    }

    /* const handleSendAnswer =(event,testId)=>{
        event.preventDefault()
        setTestId(testId)
        setView('send-answer')
    } */
    //--
    const handleretrieveTests = (event, testId) => {
        event.preventDefault()
        setTestId(testId)
        setView('student-home')
    }

    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>

        <div className="search-tests">
        {view === 'student-home' && <section className="home-tests">
            {tests && tests.map(test => {
                return <article key={test.id}>
                    <h3>{test.subject}</h3>

                    {/* <h3>Test: <a href="" className="btn-math" onClick={(event)=>handleSendAnswer(event,answer.test.id)}>{answer.test.subject}</a></h3> */}
                    <h3><a href="" className="btn-math" onClick={(event) => handleretrieveTests(test.id)}>{test.title}</a></h3>
                </article>
            })}
            </section>}


            {view === 'send-answer' && <SendAnswer user={user} testId={testId} onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />}
        </div>

        <footer className="home-footer">
        <button className="">Replied</button>
        </footer>
    </div>
}
export default StudentHome