function App(){
  console.log('App -> render')
  
   const viewState = React.useState('login')
   const view = viewState[0] 
   const setView = viewState[1] // estamos en login o register

   const handleRegisterClick = () => setView('register')

   const handleLoginClick = () => setView('login')

   const handleLoggedIn = () => setView('home')
   
   if (view === 'login')
   return <Login onRegisterClick={handleRegisterClick} 
   onLoggedIn={handleLoggedIn}/>
   else if ( view === 'register')
   return <Register onLoginClick={handleLoginClick}/>
   else if (view === 'home')
   return <Home />
}

//viewStates: gestiona datos cambiates dentro del componente view
//handle: controlador de eventos o función 
