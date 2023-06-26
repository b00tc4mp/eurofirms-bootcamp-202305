function Login(props) {
    console.log('Login -> render')
    
    const handleRegisterClick = event => {

        event.preventDefault()

        props.onRegisterClick()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        const result = authenticateUser(email, password)

        if (result === false)
            alert('wrong credentials')
        else {
            userId = result
            props.onLoggedIn()
        }
    }
    //target: hace referencia al objeto del elemento DOM
    //onLoggedIn: redirecciona
    //onLoggedIn: se refiere a la función q se desencadena despúes de haberse iniciado sesión
    return <main className="login-view">
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