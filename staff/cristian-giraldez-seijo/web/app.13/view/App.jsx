function App() {
    const viewState = React.useState('login')
    const view = viewState[0]
    const setView = viewState[1]


    const handleRegisterClick = ()=> setView('register')
    const handleLoginClick = ()=> setView('login')
    const handleLoggedIn = () => setView('home')

    if (view === 'login') {
        return <Login onRegisterClick={handleRegisterClick} onLoggedIn = {handleLoggedIn}/>
    } else if (view === 'register') {
        return <Register onLoginClick={handleLoginClick} />
    } else if (view === 'home') {
        return <Home />
    }
}