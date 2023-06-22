function Home() {
    return (
        <div className="home">
            <header className="home-header flex-hor">
                <div className="basic-head">
                    <h3 className="greetings">Home!</h3>
                </div>
            </header>

            <main className="home-view">
                <section className="posts-list basic-container">
                    <article>No hay posts</article>
                </section>
            </main>

            <footer className="home-nav">
                <div className="basic-nav">
                    <button type="button" className="button-newpost basic-button">Nuevo Post</button>
                    <button type="button" className="button-logout basic-button">Salir</button>
                </div>
            </footer>

            <div className="home-modal-newpost basic-modal off">
                <form className="home-modal-newpost-form basic-form" action="submit">
                    <h4>Nuevo Post</h4>

                    <label className="basic-label" htmlFor="newpost-img">Imagen url</label>
                    <input type="url" id="newpost-img"></input>

                    <label className="basic-label" htmlFor="newpost-msg">Mensaje</label>
                    <input type="text" id="newpost-msg"></input>

                    <div className="flex-hor">
                        <button type="submit" className="newpost-button basic-button">Nuevo</button>
                        <button type="button" className="newpost-button-cancel basic-button">Salir</button>
                    </div>
                </form>
            </div>

            <div className="home-modal-editpost basic-modal off">
                <form className="home-modal-editpost-form basic-form" action="submit">
                    <h4>Editar Post</h4>

                    <label className="basic-label" htmlFor="editpost-img">Imagen url</label>
                    <input type="url" id="editpost-img"></input>

                    <label className="basic-label" htmlFor="editpost-msg">Mensaje</label>
                    <input type="text" id="editpost-msg"></input>

                    <input type="hidden" id="editpost-idpost"></input>

                    <div className="flex-hor">
                        <button type="submit" className="editpost-button basic-button">Guardar</button>
                        <button type="button" className="editpost-button-cancel basic-button">Cancelar</button>
                    </div>
                </form>
            </div>

            <div className="home-modal-deletepost basic-modal off">
                <form className="home-modal-deletepost-form basic-form" action="submit">
                    <h4>Editar Post</h4>

                    <input type="hidden" id="deletepost-idpost"></input>

                    <div className="flex-hor">
                        <button type="submit" className="deletepost-button basic-button">Borrar</button>
                        <button type="button" className="deletepost-button-cancel basic-button">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
