import { Register } from "./view/pages/Register";
import { Login } from "./view/pages/Login";
import { Home } from "./view/pages/Home";
/* import { useState } from "react"; */
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

export function App() {
  /* const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

  const handleNavigateRegister = () => setView('register')
  const handleNavigateToLogin = () => setView('login')
  const handleNavigateHome = () => setView('home') */

  return (
    <Routes>
      <Route key={'login'} path="/login" element={/* sessionStorage.token ? <Navigate to='/' /> : */ <Login />} />
      <Route key={'register'} path="/register" element={<Register />} />
      <Route key={'home'} path="/*" element={<Home />
        /* sessionStorage.token ? <Home /> : <Navigate to='login' /> */} />
    </Routes>)

  /* if (view === 'login') {
    return <Login onRegisterClick={handleNavigateRegister} onLogin={handleNavigateHome} />
  } else if (view === 'register') {
    return <Register onLoginClick={handleNavigateToLogin} onRegister={handleNavigateToLogin} />
  } else if (view === 'home') {
    return <Home onLogout={handleNavigateToLogin} />
  } */
}
