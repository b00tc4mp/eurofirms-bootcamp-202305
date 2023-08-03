import { registerUser } from '../../logic/user-ctrl'

function Register({ onGotoLog, onRegisteredUser }) {
    const handleOnGotoLog = () => onGotoLog()

    const handleRegisterUser = function (event) {
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const zip = event.target.zip.value
        const email = event.target.email.value
        const password = event.target.password.value

        registerUser(name, surname, zip, email, password)
        onRegisteredUser()
    }

    return (
        <div className="register">
            <main className="reg-view">
                <form className="reg-form" action="submit" onSubmit={handleRegisterUser}>
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="name">Nombre</label>
                        <input type="text" id="name" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="suname">Nombre</label>
                        <input type="text" id="suname" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="zip">Nombre</label>
                        <input type="text" id="zip" autoComplete="off"></input>

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
export default Register