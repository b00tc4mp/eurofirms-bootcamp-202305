import { useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import context from "../context"

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
//viewStates: gestiona datos cambiates dentro del componente view
//handle: controlador de eventos o función 
//onLoggedOut:función que cuando un usuario cierra la sesión en una aplicación web, 
//también se utiliza para realizar tareas como limpiar datos de sesión, redirigir al usuario y actualizar la interfaz de usuario.