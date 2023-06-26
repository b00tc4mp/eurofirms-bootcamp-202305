function Register(props) {
    const handleLoginClick = event => {
        event.preventDefault()
        props.onLoginClick()
    }
    return <main className="register-view">
        <h1>Register</h1>

        <form className="register-form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>

            <label htmlFor="email">E-mail</label>
            <input id="email" type="email"></input>

            <label htmlFor="password">Password</label>
            <input id="password" type="password"></input>

            <button type="submit">Register</button>
        </form>

        <p>Go to <a className="register-login-link" href="" onClick={handleLoginClick}>Login</a></p>
    </main>

}