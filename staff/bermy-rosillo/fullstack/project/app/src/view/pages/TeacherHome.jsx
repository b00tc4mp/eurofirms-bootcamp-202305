import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import retrieveTeacherListTest from "../../logic/retrieveTeacherListTests"
//components
import CreateTest from "../components/teacher/CreateTest"
import RetrieveStudentsList from "../components/teacher/RetrieveStudentsList"

function TeacherHome(props) {
    console.log('TeacherHome->render')

    const [homeView, setHomeView] = useState('list-test')
    const [tests, setTests] = useState()
    const [testId, setTestId] = useState()

    const userState = useState() //null
    const user = userState[0]
    const setUser = userState[1]

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        try {
            retrieveTeacherListTest(context.token)
                .then(tests => setTests(tests))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    },

        [])

    const handleLoggedOut = () => {
        context.token = null
        setUser(null)

        props.onLoggedOutClick()
    }
    //--
    const handleCreateTest = () => {
        setHomeView('create-test')
    }
    //--
    const handleOnReturnHome = () => {
        try {
            retrieveTeacherListTest(context.token)
                .then(tests => {
                    setTests(tests)
                    setHomeView('list-test')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    //--
    const handleRetrieveStudentsList = (event, testId) => {
        event.preventDefault()
        setTestId(testId)
        setHomeView('retrieve-students-list')
    }
    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
        
            <h1 className="home-title">Teacher {user ? user.name : 'User'}  </h1> 
            <button className="btn-teacher-home" onClick={handleLoggedOut}>Logout </button>  
            <img src="../../../abcLogo.png" className="logo"></img>
        </header>

        <main className="home-main" >

            {homeView === 'list-test' && <section className="home-tests">
                <h1>Choose a test</h1>
                {tests && tests.map(test => {
                    return <article key={test.id}>
                        <h3>{test.subject}</h3>
                        <h3><a className="btn-test" href="" onClick={(event) => handleRetrieveStudentsList(event, test.id)}>{test.title}</a></h3>
                    </article>
                })}
            </section>}

            {homeView === 'create-test' && <CreateTest userName={user.name} onReturnHome={handleOnReturnHome} />}
            {homeView === 'retrieve-students-list' && <RetrieveStudentsList testId={testId} onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />}
        </main>

        <footer className="home-footer">
            <button className="btn-teacher-home" onClick={handleCreateTest}>New test</button>
        </footer>
    </div>
}
export default TeacherHome
