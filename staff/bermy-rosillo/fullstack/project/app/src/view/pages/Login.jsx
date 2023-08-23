import context from '../../context' 
import authenticateUser from "../../logic/authenticateUser"

function Login(props){
const handleRegisterClick =event=>{
    event.preventDefault()
    props.onRegisterClick()
}
const handleSubmitLoginForm = event=>{
    event.preventDefault()
   
    const email = event.target.email.value
    const password = event.target.password.value

    try{
        authenticateUser(email,password)
        .then(token=>{
            context.token = token
            props.onLoggedIn()  
        })
        .catch(error=>alert(error.message))
    }catch(error){
        alert(error.message)

    }
}
return <main className="login-view">

        <h1>Login</h1>
    
        <form className="login-form" onSubmit={handleSubmitLoginForm}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" />

            <button type="submit" className="btn-send">Login</button>
        </form>
        <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick} > Register</a></p>
    </main>
   }
   export default Login 