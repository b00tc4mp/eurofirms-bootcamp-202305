import { useState } from "react"
import Login from "./view/pages/Login"
import Register from "./view/pages/Register"
import Home from "./view/pages/Home"
import context from "./context"

function App() {
  console.log('App -> render')

  const [view, setView] = useState(context.token ? 'home' : 'login')

  const handleRegisterClick = () => setView('register')

  const handleLoginClick = () => setView('login')

  const handleLoggedIn = () => setView('home')

  const handleRegistered = () => setView('login')

  const handleLoggedOut = () => setView('login')

  if (view === 'login')
    return <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn} />
  else if (view === 'register')
    return <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered} />
  else if (view === 'home')
    return <Home onLoggedOut={handleLoggedOut} />
}

export default App