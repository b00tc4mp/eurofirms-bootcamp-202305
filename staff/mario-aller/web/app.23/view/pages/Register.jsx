function Register(props) {

    const handleOnGotoLog = () => props.onGotoLog()

    const handleRegisterUser = function (event) {
        event.preventDefault()

        const name = event.target.name.value 
        const email = event.target.email.value 
        const password = event.target.password.value 

        const userExist = userGetId(email)
        if (userExist === null) {
            if (!userToList(name,email,password)) alert ('No es posible crear usuario')
            props.onUserRegistered()
        } else {
            alert ('No es posible crear usuario')
        }
    }

    return (
        <div className="register">
            <main className="reg-view">
                <form className="reg-form" action="submit" onSubmit={handleRegisterUser}>
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="name">Nombre</label>
                        <input type="text" id="name" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="email">Correo</label>
                        <input type="email" id="email" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="password">Clave</label>
                        <input type="password" id="password" autoComplete="off"></input>

                        <button className="basic-button">Registrarse</button>
                    </div>
                </form>
            </main>

            <footer className="reg-nav">
                <div className="basic-nav">
                    <button type="submit" className="button-tolog basic-button" onClick={handleOnGotoLog}>Acceso</button>
                    <button type="button" className="basic-button">Otra acción</button>
                </div>
            </footer>

        </div>
    )
}
