function Register(props) {
    console.log('Register -> render')

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        const result = registerUser(name, email, password)

        if (!result)
            alert('User already exists')
        else
            props.onRegistered()
    }

    return <main className="register-view">
        <h1>Register</h1>

        <form className="register-form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>

            <label htmlFor="email">E-mail</label>
            <input id="email" type="email"></input>

            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>

            <button type="submit">Register</button>
        </form>

        <p>Go to <a className="register-login-link" href="" onClick={handleLoginClick}>Login</a></p>
    </main>
}