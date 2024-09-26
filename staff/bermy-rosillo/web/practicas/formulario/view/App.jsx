/*los atributos de los componentes son parametros enviados y sse llaman con el objeto props */
/*App envia properties a login(componente): onRegisterClick es una property que la maneja el obj props */
function App(){
   console.log('App->render')
   const viewState = React.useState( context.userId ?'home':'login') //si existe un suario conectado muestra home , sino muestra login
   const view = viewState[0]                                         //mantiene sesion(solo para usuarios existentes, no para nuevos)
   const setView = viewState[1]
   
   const registerClick =()=>setView('register')
   const onLoginClick=()=>setView('login')
   const loggedIn=()=>setView('home')
   const registeredSubmit=()=>setView('login')
   const logoutButton=()=>setView('login')
   
   if(view === 'login') //param
      return < Login onRegisterClick={registerClick} onLoggedIn={loggedIn} />
   
   else if(view === 'register')
      return < Register onLoginClick={onLoginClick} Register={registeredSubmit} />

   else if(view === 'home')
      return < Home onLogout={logoutButton} />
   
   
}