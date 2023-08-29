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

    return <div className='flex flex-col items-center'>
        <div >
            <form className="flex gap-2 items-start" onSubmit={handleLoginSubmit}>
                <h2 className="font-bold">Login</h2>

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="email"></input>

                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="password"></input>

                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded">Login</button>
            </form>
        </div>
        <p className="italic">Don't have you an account yet?</p>
        <a className="text-blue-800 font-semibold" href="" onClick={handleNavigateToRegister}>Register</a>
    </div>
}
export default LoginModal