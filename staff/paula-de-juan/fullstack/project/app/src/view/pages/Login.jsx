import authenticateUser from '../../logic/authenticateUser'
import context from '../../context'

function Login({ onRegisterClick, onLoggedIn }) {
    console.log('Login -> render')

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    context.token = token

                    onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <main> <div className="layout">
        <nav className="layout__navbar">
            <header className="navbar__header">
                <img src="../../../../../public/legendary.png" alt="musical social-network" />
            </header>
            <div className="navbar_container-lists">
            </div>
        </nav>
    </div>
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg bg-orange">
                <h1 className="text-2xl font-semibold text-center text-black-500 mt-8 mb-6">Login into your account</h1>
                <form onSubmit={handleLoginSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-black-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
                        </input>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm text-black-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
                        </input>
                        <a href="#" className="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="background-personalized-button1 position-center">Acceso</button>
                    </div>
                    <br/>
                    <div className="text-center">
                        <p className="text-sm">¿No tienes una cuenta? <a href="#" className="text-cyan-600" onClick={handleRegisterClick}>Regístrate ahora</a></p>

                    </div>
                </form>
            </div>
        </div>
    </main>
}

export default Login