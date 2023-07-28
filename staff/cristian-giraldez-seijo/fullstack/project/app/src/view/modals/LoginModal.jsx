function LoginModal({ onNavigateToRegister }) {
const handleNavigateToRegister = event => {
    event.preventDefault()
    onNavigateToRegister()
}

    return <div className="home-login-modal">
        <div className="home-login-container">
            <h2>login.</h2>

            <form className="login">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email"></input>

                <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>

            <button type="submit">Login</button>
            </form>
        </div>
        <p>Don't have you an account yet? <a className="login-register-link" href="" onClick={handleNavigateToRegister}>register</a></p>
    </div>
}
export default LoginModal