/**
 * The Login function is a React component that renders a login form and handles user authentication.
 * @returns The Login component is returning a JSX element, specifically a main element with a
 * className of "login-view". Inside the main element, there is an h1 element with the text "Login", a
 * form element with a className of "login-form", and a p element with a link to register.
 */
function Login(props) {
    console.log('Login->render')

    const handleRegisterClick = event => {
        event.preventDefault()
        props.onRegisterClick()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        try {
            authenticateUser(email, password)
                .then(userId => {
                    context.userId = userId
                    props.onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    }
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