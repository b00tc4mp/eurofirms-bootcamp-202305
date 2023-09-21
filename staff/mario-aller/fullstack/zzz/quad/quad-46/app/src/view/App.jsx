import { useState } from 'react'
import context from '../context'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

/**
 * The App function in JavaScript React renders different components based on the current view state.
 * @returns The App component is returning different components based on the value of the "view" state.
 * If the "view" state is set to "login", it returns the Login component. If the "view" state is set to
 * "register", it returns the Register component. If the "view" state is set to "home", it returns the
 * Home component. If the "view" state is not
 */
function App() {
    const [view, setView] = useState(context.tokenUser ? 'home' : 'login')

    const handleToRegView = () => setView('register')
    const handleToLogView = () => setView('login')
    const handleToHomeView = () => setView('home')

    switch (view) {
        case 'login':
            return <Login onGotoReg={handleToRegView} onLogged={handleToHomeView} />
        case 'register':
            return <Register onGotoLog={handleToLogView} onRegisteredUser={handleToLogView} />
        case 'home':
            return <Home onLogout={handleToLogView} />
        default:
            console.log('Error: Estado view de App no definido')
            return null
    }
}

export default App