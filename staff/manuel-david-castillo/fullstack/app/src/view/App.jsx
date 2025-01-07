import { useState } from 'react'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Home } from "./pages/home";

export function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

    const handleNavigateRegister = () => setView('register')
    const handleNavigateToLogin = () => setView('login')
    const handleNavigateHome = () => setView('home')

    if (view === 'login') {
        return <Login onRegisterClick={handleNavigateRegister} onLogin={handleNavigateHome} />
    } else if (view === 'register') {
        return <Register onLoginClick={handleNavigateToLogin} onRegister={handleNavigateToLogin} />
    } else if (view === 'home') {
        return <Home onLogout={handleNavigateToLogin} />
    }
}