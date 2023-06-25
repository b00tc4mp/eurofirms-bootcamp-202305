function Register(props) {

    const gotoLogin = function () {
        props.onLogClick()
    }

    const userToBeRegistered = function (event) {
        event.preventDefault()

        const name = event.target.name.value 
        const email = event.target.email.value 
        const password = event.target.password.value 

        const userExist = userGetId(email)
        if (userExist === null) {
            if (!userToList(name,email,password)) alert ('No es posible crear usuario')
            props.onToBeRegistered()
        } else {
            alert ('No es posible crear usuario')
        }
    }

    return (
        <div className="register">
            <main className="reg-view">
                <form className="reg-form" action="submit" onSubmit={userToBeRegistered}>
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="name">Nombre</label>
                        <input type="text" id="name"></input>

                        <label className="basic-label" htmlFor="email">Correo</label>
                        <input type="email" id="email"></input>

                        <label className="basic-label" htmlFor="password">Clave</label>
                        <input type="password" id="password"></input>

                        <button className="basic-button">Registrarse</button>
                    </div>
                </form>
            </main>

            <footer className="reg-nav">
                <div className="basic-nav">
                    <button type="submit" className="button-tolog basic-button" onClick={gotoLogin}>Acceso</button>
                    <button type="button" className="basic-button">Otra acción</button>
                </div>
            </footer>

        </div>
    )
}
