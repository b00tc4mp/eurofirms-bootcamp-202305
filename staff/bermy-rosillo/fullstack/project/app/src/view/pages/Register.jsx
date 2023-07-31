
function Register(props){
console.log('register render')

const handleLoginClick = event=>{
    event.preventDefault()
    props.onLoginClick()
}

return <main className="register-view">
    <h1>Register page</h1>

<form className="register-form">
    <p>Personal information</p>

    <label htmlFor="name">Name</label>
    <input id="name" type="text"/>

    <label htmlFor="password">Password</label>
    <input id="password" type="password"/>

    <label htmlFor="email">E-mail</label>
    <input id="email" type="email"/>

    <label htmlFor="role">E-mail</label>
    <input id="role" type="text"/>

    <button type="submit">Register</button>
</form>
<p>Go to <a className="register-login-link" href="" onClick={handleLoginClick} > Login</a></p>
</main>
}
export default Register