/**
 * The App function renders different components based on the current view state.
 * @returns different components based on the value of the `view` variable. If `view` is equal to
 * 'login', it returns the `<Login />` component with the `onRegisterClick` and `onLoggedIn` props. If
 * `view` is equal to 'register', it returns the `<Register />` component with the `onLoginClick` and
 * `onRegistered` props
 */
function App() {
    console.log('App->render')
    
    const viewState = React.useState(context.userId ? 'home' : 'login')
    const view = viewState[0]
    const setView = viewState[1]


    const handleRegisterClick = () => setView('register')
    const handleLoginClick = () => setView('login')
    const handleLoggedIn = () => setView('home')
    const handleRegistered = () => setView('login')
    const handleLoggedOut = () => setView('login')

    if (view === 'login') {
        return <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn} />
    } else if (view === 'register') {
        return <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered} />
    } else if (view === 'home') {
        return <Home onLoggedOut={handleLoggedOut} />
    }
}