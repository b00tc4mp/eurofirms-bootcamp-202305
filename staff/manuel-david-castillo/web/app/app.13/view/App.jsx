function App() {
    const viewState = React.useState('login')
    const view = viewState[0]
    const setView = viewState[1]

    const handleRegisterClick = () => setView('register')
    const handleNavigateToLogin = () => setView('login')
    const handleLogin = () => setView('home')

    if(view === 'login') {
        return <Login onRegisterClick = {handleRegisterClick} onLogin = {handleLogin}/>
    } else if (view === 'register') {
        return <Register onLoginClick = {handleNavigateToLogin} onRegister = {handleNavigateToLogin}/>
    } else if (view === 'home') {
        return <Home onLogout = {handleNavigateToLogin}/>
    }
 }