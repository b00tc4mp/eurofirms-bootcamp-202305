function App() {
    const [view, setView] = React.useState(context.userLoggedId ?  'home' : 'login')

    const handleToRegView = () => setView('register')
    const handleToLogView = () => setView('login')
    const handleToHomeView = () => setView('home')


    switch (view) {
        case 'login':
            return <Login onRegClick={handleToRegView} onLogClick={handleToHomeView} />
        case 'register':
            return <Register onLogClick={handleToLogView} onToBeRegistered={handleToLogView}/>
        case 'home':
            return <Home onLogoutClick={handleToLogView} onNavigateToLogin = {handleToLogView}/>
        default:
            console.log('Error: Estado view de App no definido')
            return null
    }

    // {view === 'login' &&  <Login />}
    // {view === 'login' &&  <Login />}
    // {view === 'login' &&  <Login />}
}
