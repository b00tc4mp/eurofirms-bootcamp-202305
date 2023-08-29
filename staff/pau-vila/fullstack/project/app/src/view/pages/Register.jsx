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

        <img className="image-logo" src="../../../public/logo.jpg"></img>

        <div className="register-container"><h1>Register</h1>

        <form className="register-form" onSubmit={handleRegisterSubmit}>
            <label className="name-type" htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="name"></input>

            <label className="email-type" htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="email"></input>

            <label className="password-type" htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="password"></input>

            <label className="zip-type" htmlFor="zip">Zip</label>
            <input id="zip" type="text" placeholder="zip"></input>

            <label className="phone-type" htmlFor="phone">Phone</label>
            <input  id="phone" type="text" placeholder="phone"></input>


            <button type="submit">Register</button>
        </form>
        <p className="register-login-link">Go to <a  href="" onClick={handleLoginClick}>Login</a></p>

        
        </div>
        
        <img className="image-logo" src="../../../public/logo.jpg"></img>

    </main><footer>
        </footer>
        </>
}
export default Register 