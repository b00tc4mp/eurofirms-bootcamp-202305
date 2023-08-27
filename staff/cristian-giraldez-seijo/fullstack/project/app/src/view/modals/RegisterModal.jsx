import registerUser from '../../logic/registerUser'
import authenticateUser from '../../logic/authenticateUser'
import context from '../../context'

const RegisterModal = ({ onNavigateToLogin, onRegisterSuccess: onLoggedSuccess }) => {

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
                    onLoggedSuccess()
                })
                .catch(error => alert(error.message))
        } catch (error) { alert(error.message) }
    })

    return <div className="home-register-modal">
        <div className="home-register-container">
            <form className="register flex flex-col items-start p-2" onSubmit={handleRegisterSubmit}>
                <h2 className="font-bold">Register</h2>

                <label htmlFor="nickname">Nickname</label>
                <input id="nickname" type="text"></input>

                <label htmlFor="email">E-mail</label>
                <input id="email" type="email"></input>

                <label htmlFor="password">Password</label>
                <input id="password" type="password"></input>

                <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded my-3">Register</button>
            </form>
        </div>
        <p className="italic">Have you already an account yet? </p>
        <a className="register-login-link text-blue-800 font-semibold" href="" onClick={handleNavigateToLogin}>Login</a>
    </div>
}
export default RegisterModal