import context from '../../context'
import authenticateUser from '../../logic/authenticateUser'

function Login(props) {
    console.log('Login -> render')

    const handleRegisterClick = event => {
        event.preventDefault()//para no refrescar la página
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

    return (
        <main className="flex flex-col items-center">
            <h1 class="text-black-900 font-extrabold text-3xl text-center">Login</h1>

            <form className="login-form" onSubmit={handleLoginSubmit}>
                <label htmlFor="email">E-mail</label>
                <input class="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="email" alt="email"></input>

                <label htmlFor="password">Password</label>
                <input class="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  id="password" type="password" alt ="password"></input>

                <button class="home-logout-button" type="submit">Login</button>
            </form>

            <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
            <footer class="bg-[#D9D9D9] flex p10 h-40" >
                <p><img class="object-center md:object-top" src="public/logo03.png" alt="MeetupBikers" width="60%"/></p>
                
            </footer>
    </main >

    )
}
export default Login