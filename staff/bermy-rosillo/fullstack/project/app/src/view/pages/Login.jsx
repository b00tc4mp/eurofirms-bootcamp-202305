
function Login(props){
const handleRegisterClick =event=>{
    event.preventDefault()
    props.onRegisterClick()
}
return <main className="login-view">

        <h1>Login</h1>
    
        <form className="login-form">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" />

            <button type="submit">Login</button>
        </form>
        <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick} > Register</a></p>
    </main>
   }
   export default Login 