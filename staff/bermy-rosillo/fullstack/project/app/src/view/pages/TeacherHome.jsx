import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import retrieveTeacherListTest from "../../logic/retrieveTeacherListTests"
import CreateTest from "../components/teacher/CreateTest"

function TeacherHome(props) {
    console.log('TeacherHome->render')

    const [homeView, setHomeView] = useState()
    const [tests, setTests] = useState()

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

        props.onLoggedOutClick()
    }
    //--------------
    const handleTestsList = () => {
        /*  try {
                 retrieveTeacherListTest(context.token)
                 .then(testsList => setTest(testsList))
                 .catch(error => alert(error.message))
         } catch (error) {
             alert(error.message)
         } */
    }
    const handleCreateTest = () => {
        setHomeView('create-test')
    }
    const handleOnReturnHome =()=>{
        setHomeView(null)
    }
    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>
        {homeView === 'create-test' && <CreateTest userName={user.name} onReturnHome={handleOnReturnHome} />}
        
        <main className="home-main">
            <section className="home-tests">
                {tests && tests.map(test => {
                    return <article key={test.id}>
                        <h2>{test.title}</h2>
                        <p className='home-teacher-list-tests' src={test.title} alt={test.title}> </p>
                        {test.id === userId &&
                            <>
                                <button onClick={() => handleEditPostModal(post.id)}>Edit</button>
                                
                            </>
                            
                        } 
                    </article>
                })}
            </section>
        </main>

        <footer className="home-footer">
            <button className="home-create-test-button" onClick={handleCreateTest}>New test</button>
            <button className="home-list-tests-button" onClick={handleTestsList} >List tests</button>
        </footer>
    </div>
}
export default TeacherHome
