//import Test  from "../components/student/Test"
import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
//import retrieveAnswers from "../../logic/retrieveAnswers"
//components
function StudentHome(props) {
    console.log('student home-render')
    const [view, setview] = useState('list-answers')

    const [user, setUser] = useState(null)
    const [answer, setAnswer] = useState(null)

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then(user => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

        /* try{
            retrieveTeacherListTest(context.token)
            .then(tests=> setTests(tests))
            .catch(error => alert(error.message))
        }catch(error){
            alert(error.message)
        }
 */
    }, [])

    const handleLoggedOut = () => {
        context.token = null
        setUser(null)

        props.onLoggedOutClick()
    }
    //--
    /* const handleRetrieveAnswers = event => {
        event.preventDefault()

    } */
    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>

        <div className="search-tests">

            <form className="answers-form" >
                <h1>Search tests</h1>
                <label htmlFor="search">search: </label>
                <input id="search" type="text" />

                <button type="submit" >Send</button>
            </form>
            {/* { view === 'list-answers' && <section className="home-answers">
            {answer && answer.map(answer => {
                return <article key={answer.id}>
                    <h3>Test: {answer.test}</h3>
                    <h3>Description: <a href="" onClick={(event)=>handleRetrieveAnswers(event,answer.id)}>{answer.desccription}</a></h3>
                </article>
            })}
        </section>} */}

            {/* {homeView === 'create-test' && <CreateTest userName={user.name} onReturnHome={handleOnReturnHome} />}
        {homeView === 'retrieve-students-list' && <RetrieveStudentsList user={user} testId={testId} onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />} */}
        </div>

        <footer className="home-footer">

        </footer>
    </div>
}
export default StudentHome