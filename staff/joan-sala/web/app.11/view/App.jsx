function App(){
    console.log('App -> render')

    const viewState = React.useState(context.userId ? 'home' : 'login')
    
    const view = viewState[0]
    
    const setView = viewState[1]

    const handleRegisterClick = ()=> setView('register')
    
    const handleLoginClick = ()=> setView('login')
    
    const handleLoggedIn = () => setView('home')

    const handleRegistered = () => setView('login')

    const handleLoggedOut = () => setView('login')

    if(view ==='login')  
        return <Login onRegisterClick = {handleRegisterClick} onLoggedIn={handleLoggedIn}/>
    else if (view === 'register')
        return <Register onLoginClick = {handleLoginClick} onRegistered={handleRegistered}/>
    else if(view === 'home')
        return <Home onLoggeOut={handleLoggedOut}/>
}