function Register(){
    return <main className="register-view">
    <h1>Register</h1>
    <form action="submit" className="register-form">
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
    <p>Go to <a className="register-login-link" href="">Login</a></p>
  </main>
}