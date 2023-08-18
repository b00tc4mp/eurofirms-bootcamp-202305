import registerUser from "../../logic/registerUser"

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
        const zip = event.target.zip.value
        const phone = event.target.phone.value

        try {
            registerUser(name, email, password, zip, phone)
                .then(() => props.onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    return <><main className="register-view">
        <h1>Register</h1>

        <form className="register-form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>

            <label htmlFor="email">E-mail</label>
            <input id="email" type="email"></input>

            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>

            <label htmlFor="zip">Zip</label>
            <input id="zip" type="text"></input>

            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text"></input>


            <button type="submit">Register</button>
        </form>

        <p>Go to <a className="register-login-link" href="" onClick={handleLoginClick}>Login</a></p>
    </main><footer>
    <div class="container">
    <div class="image-container">
      <img src="../../../public/logo-tornorecicla.png"></img>
    </div></div>
        </footer>
        </>
}
export default Register 