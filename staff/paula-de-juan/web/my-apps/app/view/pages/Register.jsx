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
return <div className="register-view container">
<div className="text">
  <h1>Register</h1>
</div>
<form action="submit" className="register-form" onSubmit={handleRegisterSubmit} >
  <div className="form-row">
    <label htmlFor="register-name">Name</label>
    <div className="input-data">
      <input type="text" name="name" id="register-name" required></input>
      <div className="underline"></div>
    </div>
  </div>
  <div className="form-row">
    <label htmlFor="register-email" type="text">Email</label>
    <div className="input-data">
      <input type="text" name="email" id="register-email" required></input>
      <div className="underline"></div>
    </div>
  </div>
  <div className="form-row">
    <label htmlFor="register-password">Password</label>
    <div className="input-data">
      <input type="password" name="password" id="register-password" required></input>
      <div className="underline"></div>
    </div>
  </div>
  <div className="form-row submit-btn">
    <div className="input-data">
      <div className="inner"></div>
      <input type="submit" value="Register"></input>
    </div>
  </div>
</form>
<p>Go to <a className="register-login-link" href="" onClick={handleLoginClick} >Login</a></p>
</div>
}
