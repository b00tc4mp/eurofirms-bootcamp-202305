function Register(props){
    console.log('Register->render')
    const handleLoginClick = event =>{
        
        event.preventDefault()

        props.onLoginClick()
    }

    const handleRegisterSubmit=event =>{
        
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password= event.target.password.value 

        /*const result = registerUser(name,email,password)

        if(result === false)
            alert('UAser already exists')
        else
            props.onRegistered()*/
        try{
            registerUser(name,email,password)
            .then(()=>props.onRegistered())
            .catch(error=>alert( error.message) )

        }catch(error){
            alert(error.message)
        }

    }
    
    return <main className="register-view">
    
    <h1>Register page</h1>

    <form className="register-form" onSubmit={handleRegisterSubmit}>
        <p>Personal information</p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"/>

        <label htmlFor="email">E-mail</label>
        <input id="email" type="email"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="password"/>

        <button type="submit">Register</button>
    </form>
    <p>Go to <a className="register-login-link" href="" onClick ={handleLoginClick} > Login</a></p>
</main>
}