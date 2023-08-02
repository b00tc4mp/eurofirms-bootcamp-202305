import authenticateUser from "../../logic/authenticateUser"
import context from "../../context"
import { Link } from "react-router-dom"

export default function Login() {
    console.log('hola login')

    const handleLoginSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then((result) => {
                    context.token = result

                    context.navigate('/home')
                })
                .catch((error) => {
                    alert(error.message)
                })

        } catch (error) {
            alert(error.message)
        }
    }

    return <main className="login">
        <form onSubmit={handleLoginSubmit} className="login-form" >
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    className="input"
                    placeholder="email"
                    type="email"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    className="input"
                    placeholder="password"
                    type="password"
                />
            </div>
            <button className="button">Enter</button>
        </form>

        <Link className="link-register" to='/register' >Go to register</Link>
    </main>
}