import authenticateUser from '../../logic/authenticateUser'
import context from '../../context'

function Login({ onRegisterClick, onLoggedIn }) {
    console.log('Login -> render')

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    context.token = token

                    onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <main className="login-view">
        <h1>Login</h1>

        <form className="login-form" onSubmit={handleLoginSubmit}>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" />

            <button type="submit">Login</button>
        </form>

        <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
    </main>
}

export default Login