function PostDelete(props) {



    return <div className="home-modal-deletepost basic-modal">
        <form className="home-modal-deletepost-form basic-form" action="submit">
            <h4>Editar Post</h4>

            <input type="hidden" id="deletepost-idpost"></input>

            <div className="flex-hor">
                <button type="submit" className="deletepost-button basic-button">Borrar</button>
                <button type="button" className="deletepost-button-cancel basic-button">Cancelar</button>
            </div>
        </form>
    </div>
}