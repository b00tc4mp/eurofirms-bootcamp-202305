function Login(props) {
  const handleRegisterClick = event => {
    event.preventDefault() 

    props.onRegisterClick()
  }

  const handleLoginSubmit = event => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const result = authenticateUser(email, password)

    if(result === false) {
      alert('wrong credentials')
    } else {
      context.userId = result

      props.onLogin()
    }
  }

 return <main className="login">
      <form onSubmit={handleLoginSubmit} className="login-form" >
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            className="input"
            placeholder="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            className="input"
            placeholder="password"
            type="password"
          />
        </div>
        <button className="button">Enter</button>
      </form>
      <a className="link-register" href="#" onClick={handleRegisterClick}>Go to register</a>
    </main>
}