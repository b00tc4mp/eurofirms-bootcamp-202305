function Login() {
    // Login
    return (
        <div className="login">
            <main className="log-view">
                <form className="log-form" action="submit">
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="log-email">Correo</label>
                        <input type="email" id="log-email"></input>

                        <label className="basic-label" htmlFor="log-password">Clave</label>
                        <input type="password" id="log-password"></input>

                        <button className="basic-button">Acceso</button>
                    </div>
                </form>
            </main>

            <footer className="log-nav flex-hor">
                <div className="basic-nav">
                    <button type="submit" className="button-toreg basic-button">Registro</button>
                    <button type="button" className="basic-button">Otra acción</button>
                </div>
            </footer>
        </div>
    )
}