import context from '../../context'
import registerUser from '../../logic/registerUser'

function Register(props){
    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    const handleRegisterSubmit = event => {
          event.preventDefault()

          const name = event.target['register-name'].value
          const email = event.target['register-email'].value
          const password = event.target['register-password'].value

        const result = registerUser(name, email, password)

        if (result === false){
            alert ('User already registered')
        } else {
            props.onRegistered()
        }
    }



    return <main className="register-view">
    <h1>Register</h1>
    <form action="submit" className="register-form" onSubmit={handleRegisterSubmit}>
      <label htmlFor="register-name">Name</label>
      <input type="text" name="name" id="register-name" placeholder="Name"></input>
      <label htmlFor="register-email" type="text">Email</label>
      <input
        type="text"
        name="email"
        id="register-email"
        placeholder="e-mail"></input>
      <label htmlFor="register-password">Password</label>
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"></input>
      <button type="submit">Register</button>
    </form>
    <p>Go to <a className="register-login-link" href=""     onClick={handleLoginClick}>Login</a></p>
  </main>
}
export default Register