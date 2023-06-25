function Login(props) {
    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <main className="login-view">
        <h1>Login</h1>

        <form className="login-form">
            <label htmlFor="login-email">E-mail</label>
            <input id="login-email" type="email"></input>

            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password"></input>

            <button type="submit">Login</button>
        </form>

        <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
    </main>
}