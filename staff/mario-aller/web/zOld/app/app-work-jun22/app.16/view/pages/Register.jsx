function Register(props) {
    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    return <main className="register-view">
        <h1>Register</h1>

        <form className="register-form">
            <label htmlFor="register-name">Name</label>
            <input id="register-name" type="text"></input>

            <label htmlFor="register-email">E-mail</label>
            <input id="register-email" type="email"></input>

            <label htmlFor="register-password">Password</label>
            <input id="register-password" type="password"></input>

            <button type="submit">Register</button>
        </form>

        <p>Go to <a className="register-login-link" href="" onClick={handleLoginClick}>Login</a></p>
    </main>
}