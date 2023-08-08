import context from '../../context'
import registerUser from '../../logic/registerUser'

function Register(props) {
    console.log('Register -> render')

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }
    const handleRegisterSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        try { //Se envian los  mismos campos pero e speramos una promesa
            registerUser(name, email, password)
                .then(() => props.onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <main className="register-view">
            <h1 class="text-black-900 font-extrabold text-3xl text-center">Register</h1>

            <form className="register-form" onSubmit={handleRegisterSubmit}>
                <label htmlFor="name">Name</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="name" type="text" alt="name"></input>

                <label htmlFor="email">E-mail</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="email" alt="email"></input>

                <label htmlFor="password">Password</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" type="password" alt="password"></input>

                <label htmlFor="url">Image</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="url" type="url" alt="url"></input>

                <button className="home-logout-button" type="submit">Register</button>
            </form>

            <p>Go to <a className="login-register-link" href="" onClick={handleLoginClick}>Login</a></p>
            <footer className="initial-page-footer" >
                <p><img  src="public/logo03.png" alt="MeetupBikers" width="60%" /></p>
            </footer>
        </main>
    )
}
export default Register