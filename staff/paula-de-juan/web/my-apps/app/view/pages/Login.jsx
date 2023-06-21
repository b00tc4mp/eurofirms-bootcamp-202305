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
            userId = result
            props.onLoggedIn()
      }
    }


    return <div className="login-view container">
    <div className="text">
      <h1>Login</h1>
    </div>
    <form action="submit" className="login-form" onSubmit={handleLoginSubmit}>
      <div className="form-row">
        <label htmlFor="login-email" type="text">Email</label>
        <div className="input-data">
          <input type="text" name="email" id="login-email" required></input>
          <div className="underline"></div>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor="login-password" type="password">Password</label>
        <div className="input-data">
          <input type="password" name="password" id="login-password" required></input>
          <div className="underline"></div>
        </div>
      </div>
      <div className="form-row submit-btn">
        <div className="input-data">
          <div className="inner"></div>
          <input type="submit" value="Login"></input>
        </div>
      </div>
    </form>
    <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick} >Register</a></p>
  </div>
}