import { authenticateUser } from '../../logic/user-ctrl'
import context from '../../context'

function Login({ onGotoReg, onLogged }) {
    const handleOnGotoReg = () => onGotoReg()

    const handleOnLogin = function (event) {
        event.preventDefault()
    }
    return (
        <div className="login">
            <header className="log-header">
                <div className="basic-head">
                    <img className="logo" src="../../../public/logo-block.gif" alt="logo" />
                    <h2>Quad Application</h2>
                </div>
            </header>

            <main className="log-view">
                <form className="log-form" action="submit" onSubmit={handleOnLogin}>
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="email">email</label>
                        <input type="email" id="email" autoComplete="off"></input>

                        <label className="basic-label" htmlFor="password">password</label>
                        <input type="password" id="password" autoComplete="off"></input>

                        <button className="basic-button">Login</button>
                    </div>
                </form>
            </main>

            <footer className="log-nav">
                <div className="basic-nav">
                    <button type="submit" className="basic-button" onClick={handleOnGotoReg}>Register</button>
                    <button type="button" className="basic-button">Preferences</button>
                </div>
            </footer>
        </div>
    )
}
export default Login