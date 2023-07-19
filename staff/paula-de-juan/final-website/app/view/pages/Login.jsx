function Login(props) {
  const handleRegisterClick = event => {
    event.preventDefault()

    props.onRegisterClick()
  }

  const handleLoginSubmit = event => {
    event.preventDefault()

    const email = event.target['login-email'].value
    const password = event.target['login-password'].value

    try {
      authenticateUser(email, password)
        .then(userId => {

          context.userId = userId

          props.onLoggedIn()
        })
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }

  return <main className="login-view">
  <div className="layout">
      <nav className="layout__navbar">
         <header className="navbar__header">
              <img src="img/legendary.png" alt="musical social-network"/>
          </header>
          <div className="navbar_container-lists">
            </div>
      </nav>
         <section className="main-advertisement-element">
          <div className="urban-culture-advertisement">
              <img className="urban-people-images display-flex" src="img/match.png" alt="punk-boy and gothic-heavy-girl" />
         </div>
      </section>
<div className="clearfix">
  <aside id="lateral">
      <h3>Registrate</h3>
      <div id="login" className="aside-box">
          <form action="submit" className="login-form" onSubmit={handleLoginSubmit}>
              <label htmlFor="login-email" type="email">Email</label>
              <input type="email" name="email" id="login-email" placeholder="e-mail" />
              <label htmlFor="login-password" type="password">Password</label>
              <input type="password" name="password" id="login-password" placeholder="password" />
              <button type="submit">Login</button>
                <input type="reset" value="Reset" />
                <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
              <a href="#">Did you forget your password?</a>
          </form>
      </div>
  </aside>
  </div> 
  </div>
  </main>}