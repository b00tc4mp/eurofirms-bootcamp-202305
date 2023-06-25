function Register(props){
    console.log('Register->render')
    const handleLoginClick = event=>{
        event.preventDefault()
        
        props.onLoginClick()
    }
    //-----------------------------------------------
    const handleRegisteredSubmit=event=>{
        event.preventDefault()
        //capturo datos
        const name= event.target['register-name'].value
        const email= event.target['register-email'].value
        const password= event.target['register-password'].value

        //console.log(name,email,password)
        const result= registerUser(name,email,password)

        if(!result)
            alert('User already exists')
        else
            props.Register()
        
    }
    //-----------------------------------------------
    return <main className="register-view">
    
    <h1>Register page</h1>

    <form className="register-form" onSubmit={handleRegisteredSubmit}>
        <p>Personal information</p>
        <label htmlFor="register-name">Name</label>
        <input id="register-name" type="text"/>

        <label htmlFor="register-email">E-mail</label>
        <input id="register-email" type="email"/>

        <label htmlFor="register-password">Password</label>
        <input id="register-password" type="password"/>

        <button type="submit">Register</button>
    </form>
    <p>Go to <a className="register-login-link" href=""onClick={handleLoginClick} > Login</a></p>
</main>
}