import context from '../../context'
import authenticateUser from '../../logic/authenticateUser'


function Login({onRegisterClick, onLoggedIn}) {
  const handleRegisterClick = event => {
    event.preventDefault()

    onRegisterClick()
  }

  const handleLoginSubmit = event => {
    event.preventDefault()

    const email = event.target['login-email'].value
    const password = event.target['login-password'].value

    try {
      authenticateUser(email, password)
        .then(userId => {

          context.userId = userId

          onLoggedIn()
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
              <img src="http://legendarymusic.es/img/legendary.png" alt="musical social-network"></img>
          </header>
          <div className="navbar_container-lists">
            </div>
      </nav>
         <section className="main-advertisement-element">
          <div className="urban-culture-advertisement">
              <img className="urban-people-images display-flex" src="http://legendarymusic.es/img/match.png" alt="punk-boy and gothic-heavy-girl"></img>
         </div>
      </section>
<div className="clearfix">
  <aside id="lateral">
      <h3>Login and Be Legendary</h3>
      <div id="login" className="aside-box">
          <form action="submit" className="login-form" onSubmit={handleLoginSubmit}>
              <label htmlFor="login-email" type="email">Email</label>
              <input type="email" name="email" id="login-email" placeholder="e-mail" />
              <label htmlFor="login-password" type="password">Password</label>
              <input type="password" name="password" id="login-password" placeholder="password" />
              <button type="submit">Login</button>
               <p>Go to <a className="login-register-link" href="" onClick={handleRegisterClick}>Register</a></p>
              <a href="#">Did you forget your password?</a>
          </form>
      </div>
  </aside>
  </div> 
  </div>
  </main>}
  
export default Login