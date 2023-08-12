import { registerUser } from '../../logic/users'

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
            <header className="reg-header">
                <div className="basic-head">
                    <img className="logo" src="../../../public/logo-block.gif" alt="logo" />
                    <h2>User register - Quad</h2>
                </div>
            </header>

            <main className="reg-view">
                <form className="reg-form" action="submit" onSubmit={handleRegisterUser}>
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="name">Name</label>
                        <input type="text" id="name" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="surname">Surname</label>
                        <input type="text" id="surname" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="zip">ZIP code</label>
                        <input type="text" id="zip" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="email">email</label>
                        <input type="email" id="email" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="password">password</label>
                        <input type="password" id="password" autoComplete="off"></input>

                        <button className="basic-button">Register</button>
                    </div>
                </form>
            </main>

            <footer className="reg-nav">
                <div className="basic-nav">
                    <button type="submit" className="button-tolog basic-button" onClick={handleOnGotoLog}>Login</button>
                    <button type="button" className="basic-button">Settings</button>
                </div>
            </footer>

        </div>
    )
}
export default Register