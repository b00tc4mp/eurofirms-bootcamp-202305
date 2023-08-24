//import Test  from "../components/student/Test"
import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import retrieveTeacherListTests from '../../logic/retrieveTeacherListTests'
//components
import SendAnswer from "../components/student/SendAnswer"
import RetrieveAssessments from "../components/student/RetrieveAssessments"

function StudentHome(props) {
    console.log('student home-render')
    const [view, setView] = useState('student-home')
    const [user, setUser] = useState(null)
   /*  const [answers, setAnswers] = useState() */
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

    //--
    const handleretrieveTest = (event, testId) => {
        event.preventDefault()
        setTestId(testId)
        setView('send-answer')
        
    }
    
    const handleAssessments =()=>{

        setView('retrieve-assessments')
        
    }

    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Student {user ? user.name : 'User'} </h1>
            <button className="btn-student-home" onClick={handleLoggedOut}>Logout </button>
        </header>

        <div className="search-tests">
           
        {view === 'student-home' && <section className="home-tests">
        <h1>Available Tests</h1>
            {tests && tests.map(test => {
                return <article key={test.id}>
                    <h3>{test.subject}</h3>

                    <h3><a href="" className="btn-test" onClick={(event) => handleretrieveTest(event,test.id)}>{test.title}</a></h3>

                </article>
            })}
            </section>}

            {view === 'send-answer' && <SendAnswer  user={user} testId={testId} onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />}
            {view === 'retrieve-assessments' && <RetrieveAssessments  user={user} testId={testId} onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />}
        </div>

        <footer className="home-footer">
        <button className="btn-student-home" onClick={handleAssessments}>Replied</button>
        </footer>
    </div>
}
export default StudentHome