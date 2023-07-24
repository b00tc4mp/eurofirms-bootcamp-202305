import {useState} from "react"
import context from '../context'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

function App(){
    console.log('App -> render')

    const viewState = useState(context.userId ? 'home' : 'login')
    const view = viewState[0]
    const setView = viewState[1]

    const handleRegisterClick = () => setView('register')

    const handleLoginClick = () => setView('login')

    const handleLoggedIn = () => setView('home')

    const handleRegistered = () => setView('login')

    const handleLoggedOut = () => setView('login')

    if (view === 'login'){
        return <Login 
        onRegisterClick = {handleRegisterClick} 
        onLoggedIn={handleLoggedIn} />
    }
    else if (view === 'register'){
       return <Register 
       onLoginClick = {handleLoginClick}
       onRegistered = {handleRegistered}
       />
    }
    else if (view === 'home'){
        return <Home 
        onLoggedOut = {handleLoggedOut}        
        />
    }
}
export default App