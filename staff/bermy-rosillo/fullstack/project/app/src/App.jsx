import { useState } from "react"
import context from './context'
import extractUserRoleFromToken from "./view/helpers/extractUserRoleFromToken"
import Login from './view/pages/Login'
import StudentHome from './view/pages/StudentHome'
import TeacherHome from './view/pages/TeacherHome'
import Register from './view/pages/Register'


function App() {
    console.log('App render')

    let initialView = 'login'

    if (context.token) {
        const userRole = extractUserRoleFromToken(context.token)

        initialView = userRole === 'teacher' ? 'teacher-home' : 'student-home'
    }

    const [view, setView] = useState(initialView)

    const handleLoginClick = () => setView('login')
    const handleRegisterClick = () => setView('register')
    const handleLoggedOutClick = () => setView('login')

    const handleRegistered = () => setView('login')
    const handleLoggedIn = () => {
        const userRole = extractUserRoleFromToken(context.token)

        const view = userRole === 'teacher' ? 'teacher-home' : 'student-home'
        
        setView(view)
    }

    return <>
        {view === 'login' && <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn} />}
        {view === 'register' && <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered} />}
        {view === 'teacher-home' && <TeacherHome onLoggedOutClick={handleLoggedOutClick} />}
        {view === 'student-home' && <StudentHome onLoggedOutClick={handleLoggedOutClick} />}
    </>

}
export default App
