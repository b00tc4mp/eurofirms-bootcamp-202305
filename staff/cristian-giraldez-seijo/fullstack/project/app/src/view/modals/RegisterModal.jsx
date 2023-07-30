import React from 'react'
import registerUser from '../../logic/registerUser'
import authenticateUser from '../../logic/authenticateUser'
import context from '../../context'

const RegisterModal = ({ onNavigateToLogin, onRegisterSuccess }) => {

    const handleNavigateToLogin = event => {
        event.preventDefault()
        onNavigateToLogin()
    }

    const handleRegisterSubmit = (event => {
        event.preventDefault()
        const nickname = event.target.nickname.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(nickname, email, password)
                .then(() => {
                    return authenticateUser(email, password)
                })
                .then((token) => {
                    context.token = token
                    onRegisterSuccess()
                })
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    })

    return <div className="home-register-modal">
        <div className="home-register-container">
            <h2>register.</h2>

            <form className="register" onSubmit={handleRegisterSubmit}>
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