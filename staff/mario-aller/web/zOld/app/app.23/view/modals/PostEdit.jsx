function PostEdit(props) {



    return <div className="home-modal-editpost basic-modal">
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
}