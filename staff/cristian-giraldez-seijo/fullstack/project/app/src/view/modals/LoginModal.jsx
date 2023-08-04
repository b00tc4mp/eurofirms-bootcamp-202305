import React from 'react'
import authenticateUser from '../../logic/authenticateUser'
import context from '../../context'

const LoginModal = ({ onNavigateToRegister, onRegisterSuccess: onLoggedSuccess }) => {

    const handleNavigateToRegister = event => {
        event.preventDefault()
        onNavigateToRegister()
    }

    const handleLoginSubmit = (event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then((token) => {
                    context.token = token
                    onLoggedSuccess()
                })
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    })

    return <div className="home-login-modal">
        <div className="home-login-container">
            <h2>login.</h2>

            <form className="login" onSubmit={handleLoginSubmit}>
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