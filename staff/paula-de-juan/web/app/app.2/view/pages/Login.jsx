function Login(props){
    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    const handleLoginSubmit = event => {
      event.preventDefault()

      const email = event.target['login-email'].value
      const password = event.target['login-password'].value

      const result = authenticateUser(email, password)

      if (result === false){
            alert('Wrong credentials')
      } else {
            props.onLoggedIn()
      }
    }


    return  <main className="login-view">
    <h1>Login</h1>
    <form action="submit" className="login-form" onSubmit={handleLoginSubmit} >
      <label htmlFor="login-email" type="text">Email</label>
      <input type="text" name="email" id="login-email" placeholder="e-mail"/>

      <label htmlFor="login-password" type="password">Password</label>
      <input
        type="password"
        name="password"
        id="login-password"
        placeholder="password"
      />

      <button type="submit">Login</button>
    </form>
    <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick} >Register</a></p>
  </main>

}