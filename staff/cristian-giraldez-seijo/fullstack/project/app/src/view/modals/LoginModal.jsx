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
            <form className="login  flex flex-col items-start p-2" onSubmit={handleLoginSubmit}>
                <h2 className="font-bold">Login</h2>

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email"></input>

                <label htmlFor="password">Password</label>
                <input id="password" type="password"></input>

                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded my-3">Login</button>
            </form>
        </div>
        <p className="italic">Don't have you an account yet?</p>
        <a className="login-register-link text-blue-800 font-semibold" href="" onClick={handleNavigateToRegister}>Register</a>
    </div>
}
export default LoginModal