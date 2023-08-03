import registerUser from '../../logic/registerUser'
function Register(props){
console.log('register render')

const handleLoginClick = event=>{
    event.preventDefault()
    props.onLoginClick()
}
const handleSubmitRegisterForm = event=>{
    event.preventDefault()

    const name = event.target.name.value
    const password = event.target.password.value
    const email = event.target.email.value
    const role = event.target.role.value

    try{
        registerUser(name,password,email,role)
        .then(()=>props.onRegistered())
        .catch(error=>alert(error.message))
    }catch(error){
        alert(error.message)
    }
}

return <main className="register-view">
    <h1>Register</h1>

<form className="register-form" onSubmit={handleSubmitRegisterForm}>
    <p>Personal information</p>

    <label htmlFor="name">Name</label>
    <input id="name" type="text"/>

    <label htmlFor="password">Password</label>
    <input id="password" type="password"/>

    <label htmlFor="email">E-mail</label>
    <input id="email" type="email"/>

    <label htmlFor="role">Role</label>
    <input id="role" type="text"/> 
    
    {/* <label htmlFor="role">Role</label>
    <select id="role">
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
    </select> */}

    <button type="submit">Register</button>
</form>
<p>Go to <a className="register-login-link" href="" onClick={handleLoginClick} > Login</a></p>
</main>
}
export default Register