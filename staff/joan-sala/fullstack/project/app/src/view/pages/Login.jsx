import context from '../../context'
import authenticateUser from '../../logic/authenticateUser'

function Login(props) {
    console.log('Login -> render')

    const handleRegisterClick = event => {
        event.preventDefault()//para no refrescar la página
        props.onRegisterClick()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    context.token = token
                    props.onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <main className="login-view">
            <h1>Login</h1>

            <form className="login-form" onSubmit={handleLoginSubmit}>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email"></input>

                <label htmlFor="password">Password</label>
                <input id="password" type="password"></input>

                <button type="submit">Login</button>
            </form>

            <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
            <footer className="initial-page-footer" >
                <p><img src="public/logo03.png" alt="MeetupBikers" width="60%"/></p>
                
            </footer>
    </main >

    )
}
export default Login