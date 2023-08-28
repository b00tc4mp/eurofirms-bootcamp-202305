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
            <h1 className="text-black-900 font-extrabold text-3xl text-center pt-12 p-4">Login</h1>

            <form className="free flex-col" onSubmit={handleLoginSubmit}>
                <label htmlFor="email">E-mail</label>
                <input class="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="email" alt="email"></input>

                <label htmlFor="password">Password</label>
                <input class="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500"  id="password" type="password" alt ="password"></input>

                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full shadow-sm my-5 hover:bg-[#707070]" type="submit">Login</button>
            </form>

            <p>Go to <a className="login-register-link underline" href="" onClick={handleRegisterClick}>Register</a></p>
            <footer className="initial-page-footer justify-center items-center flex underline-offset-8 text-center" >
                <p><img className="bg-contain bg-center h-20" src="public/logo03.png" alt="MeetupBikers" /></p>
            </footer>
    </main >

    )
}
export default Login