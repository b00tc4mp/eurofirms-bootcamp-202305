function App() {
    const viewState = React.useState(sessionStorage.token ? 'home' : 'login')
    const view = viewState[0]
    const setView = viewState[1]

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