function App() {

    const [view, setView] = React.useState(context.tokenUser ? 'home' : 'login')

    const handleToRegView = () => setView('register')
    const handleToLogView = () => setView('login')
    const handleToHomeView = () => setView('home')

    switch (view) {
        case 'login':
            return <Login onGotoReg={handleToRegView} onLogged={handleToHomeView} />
        case 'register':
            return <Register onGotoLog={handleToLogView} onRegisteredUser={handleToLogView} />
        case 'home':
            return <Home onLogout={handleToLogView} />
        default:
            console.log('Error: Estado view de App no definido')
            return null
    }
}
