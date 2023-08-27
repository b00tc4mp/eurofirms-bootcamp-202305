import { useState } from "react"
import context from '../context'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

function App(){
   console.log('App->render')
   const viewState = useState(context.token ? 'home' : 'login')
   const view = viewState[0] //actual state
   const setView = viewState[1] //Changes state
   
   const handleRegisterClick = () => setView('register')
   const handleLoginClick = () => setView('login')//to change state
   
   const handleLoggedIn = () =>setView('home')
   const handleRegistered =() =>setView('login')
   const handleLoggedOut=()=>setView('login')

   return <>
   {view ==='login' && <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn} />}
   {view === 'register' && <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered }/>}
   {view ==='home' && <Home logoutClick={handleLoggedOut} />}
   </>
}
export default App