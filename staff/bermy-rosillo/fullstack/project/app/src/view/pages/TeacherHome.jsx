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

        try{
            retrieveTeacherListTest(context.token)
            .then(tests=> setTests(tests))
            .catch(error => alert(error.message))
        }catch(error){
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
    const handleOnReturnHome =()=>{
        setHomeView('list-test')
        
    }
    //--
    const handleRetrieveStudentsList =(event) =>{
        event.preventDefault()
        setHomeView('retrieve-students-list')
    }
    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ?user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>
        
        <main className="home-main">
            { homeView === 'list-test' && <section className="home-tests">
                {tests && tests.map(test => {
                    return <article key={test.id}>
                        <h3>Subject: {test.subject}</h3>
                        <h3>Title: <a href="" onClick={handleRetrieveStudentsList}>{test.title}</a></h3>
                    </article>
                })}
            </section>}

            {homeView === 'create-test' && <CreateTest userName={user.name} onReturnHome={handleOnReturnHome} />}
            {homeView === 'retrieve-students-list' && <RetrieveStudentsList user={user}   onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />}
        </main>
       
        <footer className="home-footer">
            <button className="home-create-test-button" onClick={handleCreateTest}>New test</button>
        </footer>
    </div>
}
export default TeacherHome
