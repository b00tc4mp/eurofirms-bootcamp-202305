import { useState,useEffect } from "react"
import context from '../../context'
import retrieveUser from '../../logic/retrieveUser'
import extractUserIdFromToken from '../helpers/extractUserIdFromToken'
import Test from "../components/teacher/Test"

function TeacherHome(props) {
    console.log('TeacherHome->render')

    const viewModal = useState()
    const modal = viewModal[0]
    const setModal = viewModal[1]

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
    //--------------------------------------------
    const userId = extractUserIdFromToken(context.token)

    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
        </header>

        <Test></Test>


        <footer className="home-footer">
            <button className="home-create-post-button" /* onClick={handleCreatePostModal} */>New test</button>
        </footer>
    </div>
}
export default TeacherHome
