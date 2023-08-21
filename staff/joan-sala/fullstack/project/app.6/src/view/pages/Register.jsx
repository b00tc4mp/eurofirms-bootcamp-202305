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
        const image = event.target.url.value

        try { //Se envian los  mismos campos pero e speramos una promesa
            registerUser(name, email, password, image)
                .then(() => props.onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <main className="flex flex-col items-center "
        >
            <h1 className="text-black-900 font-extrabold text-3xl text-center pt-12 p-4">Register</h1>

            <form className="free flex-col" onSubmit={handleRegisterSubmit}>
                <label htmlFor="name">Name</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="name" type="text" alt="name"></input>

                <label htmlFor="email">E-mail</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="email" alt="email"></input>

                <label htmlFor="password">Password</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" type="password" alt="password"></input>

                <label htmlFor="url">Image</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="url" type="url" alt="url"></input>

                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full shadow-sm my-5 hover:bg-[#707070]" type="submit">Register</button>
            </form>

            <p>Go to <a className="login-register-link underline" href="" onClick={handleLoginClick}>Login</a></p>
            <footer className="initial-page-footer justify-center underline-offset-8" >
                <p><img className="bg-contain bg-center h-20" src="public/logo03.png" alt="MeetupBikers" /></p>
            </footer>
        </main>
    )
}
export default Register