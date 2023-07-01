function Login(props) {
    const handleRegisterClick = event => {
        event.preventDefault()
        props.onRegisterClick()
    }
const handleLoginSubmit = event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    const result = authenticateUser(email, password)
    if (result === false) {
        alert('Wrong credentials!')
    } else {
        userId = result
        props.onLoggedIn()
    }
}
    return <main className="login-view _off">
    <h1>Login</h1>
    
    <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email"></input>
    
        <label htmlFor="password">Password</label>
        <input id="password" type="password"></input>
    
        <button type="submit">Login</button>
    </form>
    
<p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
    </main>
    
}