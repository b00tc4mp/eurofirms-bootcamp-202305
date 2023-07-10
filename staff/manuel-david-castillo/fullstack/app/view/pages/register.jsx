function Register(props) {
  const handleLoginClick = event => {
    event.preventDefault()

    props.onLoginClick()
  }

  const handleRegister = event => {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    /* const result = registerUser(name, email, password)

    if(result === false) {
      alert('user already exits')
    } else {
      props.onRegister()
    } */

    try {
      registerUser(name, email, password)
        .then(() => {
          props.onRegister()
        })
        .catch((error) => {
          alert(error.message)
        })
    } catch (error) {
      alert(error.message)
    }
  }

  return <main className="register">
    <form onSubmit={handleRegister} className="register-form" action="">
      <h2>Register</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" className="input" placeholder="name" type="text" />
      </div>
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
      <button className="button">Register</button>
    </form>
    <a className="link-login" href="#" onClick={handleLoginClick}>Go to Login</a>
  </main>
}