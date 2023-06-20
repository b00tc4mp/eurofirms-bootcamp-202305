function Login() {
 return <main className="login">
      <form className="login-form" action="">
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="login-email"
            className="input"
            placeholder="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="login-password"
            className="input"
            placeholder="password"
            type="password"
          />
        </div>
        <button className="button">Enter</button>
      </form>
      <a className="link-register" href="#">Go to register</a>
    </main>
}