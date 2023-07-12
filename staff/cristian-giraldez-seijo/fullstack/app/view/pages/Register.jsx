/**
 * The Register component is a form for user registration with input fields for name, email, and
 * password, and a button to submit the registration.
 * @returns The Register component is returning JSX elements that make up the registration form.
 */
function Register(props) {
    console.log('Register->render')

    const handleLoginClick = event => {
        event.preventDefault()
        props.onLoginClick()
    }
    const handleRegisterSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        try {
            registerUser(name, email, password)
                .then(() => props.onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
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