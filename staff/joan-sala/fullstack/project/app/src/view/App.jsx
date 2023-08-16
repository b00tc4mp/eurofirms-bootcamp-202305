import { useState } from 'react'
import context from '../context'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import NetworkRules from './pages/NetworkRules'

function App(){
    console.log('App -> render')

    const [view, setView] = useState(context.token ? 'home' : 'login')

    const handleRegisterClick = () => setView('register')

    const handleLoginClick = () => setView('login')

    const handleLoggedIn = () => setView('home')

    const handleRegistered = () => setView('login')

    const handleLoggedOut = () => setView('login')

    const handleNetworkRulesClick = () => setView('network')

    if(view ==='login')  
        return <Login onRegisterClick = {handleRegisterClick} onLoggedIn={handleLoggedIn}/>
    else if (view === 'register')
        return <Register onLoginClick = {handleLoginClick} onRegistered={handleRegistered}/>
    else if(view ==='network')
        return <NetworkRules onNetworkRulesClick = {handleNetworkRulesClick} onRegistered={handleNetworked}/>
    else if(view === 'home')
        return <Home onLoggedOut={handleLoggedOut}/>
}
export default App