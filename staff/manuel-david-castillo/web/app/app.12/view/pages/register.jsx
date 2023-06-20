function Register() {
 return <main className="register">
      <form className="register-form" action="">
        <h2>Register</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" className="input" placeholder="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="register-email"
            className="input"
            placeholder="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="register-password"
            className="input"
            placeholder="password"
            type="password"
          />
        </div>
        <button className="button">Register</button>
      </form>
      <a className="link-login" href="#">Go to Login</a>
    </main>
}