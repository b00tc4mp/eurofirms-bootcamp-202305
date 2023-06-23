function App(){
   console.log('App->render')

   const viewState = React.useState('login')
   const view = viewState[0] //actual state
   const setView = viewState[1] //Changes state
   
   const handleRegisterClick = () => setView('register')
   const handleLoginClick = () => setView('login')//to change state
   
   const handleLoggedIn = () =>setView('home')
   const handleRegistered =() =>setView('login')

   if(view ==='login'){
     return <Login onRegisterClick={handleRegisterClick} onLoggedIn={handleLoggedIn} />

   }else if(view === 'register'){
      return <Register onLoginClick={handleLoginClick} onRegistered={handleRegistered }/>

   }else if(view ==='home'){
      return <Home/>
   }
}