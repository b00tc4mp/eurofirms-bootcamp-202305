function Register() {
    return (
        <div className="register">
            <main className="reg-view">
                <form className="reg-form" action="submit">
                    <div className="basic-form">
                        <label className="basic-label" htmlFor="reg-name">Nombre</label>
                        <input type="text" id="reg-name"></input>

                        <label className="basic-label" htmlFor="reg-email">Correo</label>
                        <input type="email" id="reg-email"></input>

                        <label className="basic-label" htmlFor="reg-password">Clave</label>
                        <input type="password" id="reg-password"></input>

                        <button className="basic-button">Registrarse</button>
                    </div>
                </form>
            </main>

            <footer className="reg-nav">
                <div className="basic-nav">
                    <button type="submit" className="button-tolog basic-button">Acceso</button>
                    <button type="button" className="basic-button">Otra acción</button>
                </div>
            </footer>

        </div>
    )
}