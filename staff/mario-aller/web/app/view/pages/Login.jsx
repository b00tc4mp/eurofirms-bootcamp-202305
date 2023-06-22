function Login(props) {

    const gotoReg = function () {
        props.onRegClick()
    }

    const toBeLogged = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        if (userPasswordOK(email, password)) {
            context.userLoggedId = userGetId(email)
            props.onLogClick()
        } else {
            alert('Usuario no válido')
        }
    }

    return (
        <div className="login">
            <main className="log-view">
                <form className="log-form" action="submit" onSubmit={toBeLogged}>
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="email">Correo</label>
                        <input type="email" id="email" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="password">Clave</label>
                        <input type="password" id="password" autoComplete="off"></input>

                        <button className="basic-button">Acceso</button>
                    </div>
                </form>
            </main>

            <footer className="log-nav flex-hor">
                <div className="basic-nav">
                    <button type="submit" className="button-toreg basic-button" onClick={gotoReg}>Registro</button>
                    <button type="button" className="basic-button">Otra acción</button>
                </div>
            </footer>
        </div>
    )
}
