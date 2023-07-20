/**
 * The App component renders different pages based on the current view state, such as the Login page,
 * Register page, or Home page.
 * @returns The App component is returning different components based on the value of the `view`
 * variable. If `view` is equal to 'login', it returns the Login component. If `view` is equal to
 * 'register', it returns the Register component. If `view` is equal to 'home', it returns the Home
 * component.
 */
import { useState } from "react"
import context from '../context'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
    console.log('App->render')

    const [view, setView] = useState(context.token ? 'home' : 'login')

    const handleRegisterClick = () => setView('register')
    const handleLoginClick = () => setView('login')
    const handleLoggedIn = () => setView('home')
    const handleRegistered = () => setView('login')
    const handleLoggedOut = () => setView('login')

    if (view === 'login') {
        return <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn} />
    } else if (view === 'register') {
        return <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered} />
    } else if (view === 'home') {
        return <Home onLoggedOut={handleLoggedOut} />
    }
}
export default App