//import Test  from "../components/student/Test"
import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import retrieveStudentAnswers from '../../logic/retrieveStudentAnswers'
//components
function StudentHome(props) {
    console.log('student home-render')
    const [view, setview] = useState()
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
                        
                           <h3>Test: <a href="">{answer.test.subject}</a></h3> 
                          {/* <h3>Description: <a href="" >{answer.description}</a></h3>  */}
                    </article>
                })}
            

            {/* {homeView === 'create-test' && <CreateTest userName={user.name} onReturnHome={handleOnReturnHome} />}
        {homeView === 'retrieve-students-list' && <RetrieveStudentsList user={user} testId={testId} onLoggedOutClick={handleLoggedOut} onReturnHome={handleOnReturnHome} />} */}
        </div>

        <footer className="home-footer">

        </footer>
    </div>
}
export default StudentHome