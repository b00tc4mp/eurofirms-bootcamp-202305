import authenticateUser from "../../logic/authenticateUser"
import context from "../../context"
import React, { useState } from 'react'
import ViewInfoPlus from '../modals/ViewInfoPlus'

function Login(props) {
    console.log('Login -> render')

    const [modal, setModal] = useState(null);

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
                .then(token => {
                    context.token = token

                    props.onLoggedIn()

                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const handleAboutClick = () => {
        setModal('about')
    }
    const handleReturnView = () => {
        setModal(null)
    }

    return <><main className="login-view">

        <img className="image-logo" src="../../../public/logo.jpg"></img>

        <div className="login-container"><h1>Login</h1>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <label className="email-type" htmlFor="email">E-mail</label>
                <input id="email" type="email"></input>

                <label className="password-type" htmlFor="password">Password</label>
                <input id="password" type="password"></input>

                <button type="submit">Login</button>
            </form>

            <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
            
            <button onClick={handleAboutClick}>About</button>
        </div>

        <img className="image-logo" src="../../../public/logo.jpg"></img>

    </main><footer>
        </footer>
        {modal === 'about' && <ViewInfoPlus onReturned={handleReturnView} />}
    </>
}
export default Login 