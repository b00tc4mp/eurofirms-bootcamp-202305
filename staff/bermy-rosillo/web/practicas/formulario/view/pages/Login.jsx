//props is a object with properties
function Login(props) {
    console.log('login->render')

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }
    //--------------------------------------
    const handleLoginSubmit = event => {
        event.preventDefault()
        //atrapo datos del form
        const email = event.target['login-email'].value
        const password = event.target['login-password'].value

        const result = authenticateUser(email, password)

        if (result === false)
            alert('Wrong credentials')
        else {
            userId=result //uusario conectado
            console.log(userId)
            props.onLoggedIn()
        }

    }


//-------------------------------------


return <main className="login-view">

    <h1>Login</h1>

    <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="login-email">E-mail</label>
        <input id="login-email" type="email" />

        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" />

        <button type="submit">Login</button>
    </form>
    <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}   > Register</a></p>
</main>
}