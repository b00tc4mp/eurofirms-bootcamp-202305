import { useState, useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import CreateTest from "../components/teacher/CreateTest"

function TeacherHome(props) {
    console.log('TeacherHome->render')

    const [homeView,setHomeView] = useState()


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

    }, [])

    const handleLoggedOut = () => {
        context.token = null

        props.onLoggedOutClick()
    }
    //--------------
    const handleTestsList = () => {
       /*  try {
                retrieveTestsList(context.token)
                .then(testsList => setTest(testsList))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        } */
    }
    const handleCreateTest = () => {
        setHomeView('create-test')
    }
    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>

            <button className="home-create-test-button" onClick={handleCreateTest}>New test</button>
            <button className="home-list-tests-button" onClick={handleTestsList} >List tests</button> 
            
        </header>
        


         {homeView === 'create-test' && <CreateTest />} 
        


    

       


        <footer className="home-footer">
            
        </footer>
    </div>
}
export default TeacherHome
