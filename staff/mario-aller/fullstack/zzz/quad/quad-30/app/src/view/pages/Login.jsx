import { authenticateUser } from '../../logic/users'
import context from '../../context'

/**
 * The Login function is a React component that renders a login form with email and password inputs, a
 * login button, and navigation buttons for registration and settings.
 * @returns The Login component is being returned.
 */
function Login({ onGotoReg, onLogged }) {
    const handleOnGotoReg = () => onGotoReg()

    const handleOnLogin = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        try {
            authenticateUser(email, password)
                .then(token => {
                    context.tokenUser = token
                    onLogged()
                })
                .catch(error => alert('Error:' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }
    return (
        <div className="login">
            <header className="log-header">
                <div className="basic-head">
                    <img className="logo" src="../../../public/logo-block.gif" alt="logo" />
                    <h2>Quad Application</h2>
                </div>
            </header>

            <main className="log-view">
                <form className="log-form" action="submit" onSubmit={handleOnLogin}>
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="email">email</label>
                        <input type="email" id="email" autoComplete="off" defaultValue="test@user.com"></input>

                        <label className="basic-label" htmlFor="password">password</label>
                        <input type="password" id="password" autoComplete="off" defaultValue="1234asdf"></input>

                        <button className="basic-button">Login</button>
                    </div>
                </form>
            </main>

            <footer className="log-nav">
                <div className="basic-nav">
                    <button type="submit" className="basic-button" onClick={handleOnGotoReg}>Register</button>
                    <button type="button" className="basic-button">Settings</button>
                </div>
            </footer>
        </div>
    )
}

export default Login