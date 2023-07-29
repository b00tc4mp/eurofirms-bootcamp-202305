const RegisterModal = ({onNavigateToLogin}) => {

    const handleNavigateToLogin = event => {
        event.preventDefault()
        onNavigateToLogin()
    }
    
    return <div className="home-register-modal">
        <div className="home-register-container">
            <h2>register.</h2>

            <form className="register">
                <label htmlFor="nickname">Nickname</label>
                <input id="nickname" type="text"></input>

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email"></input>

                <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>

            <button type="submit">Register</button>
            </form>
        </div>
        <p>Have you already an account yet? <a className="register-login-link" href="" onClick={handleNavigateToLogin}>Login</a></p>
    </div>
}
export default RegisterModal