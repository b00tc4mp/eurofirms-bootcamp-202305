import { useState } from "react"
import context from './context'
import Login from './view/pages/Login'
import Home from './view/pages/Home'
import Register from './view/pages/Register'

function App() {
console.log('App render')
const [view, setView] = useState(context.token ? 'home':'login')

const handleLoginClick =()=> setView('login')
const handleRegisterClick = ()=> setView('register')
const handleLoggedOutClick = ()=> setView('login')

return <>
{view ==='login' && <Login onRegisterClick={handleRegisterClick}/>}
{view === 'register' && < Register onLoginClick={handleLoginClick}/>}
{view === 'home' && < Home onLoggedOutClick={handleLoggedOutClick}/>}
</>

}
export default App
