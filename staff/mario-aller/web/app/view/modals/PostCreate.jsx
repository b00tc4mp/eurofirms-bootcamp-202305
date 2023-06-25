function PostCreate(props) {

    const handleOnExit = () => props.onExitModal()
    const handleOnSubmitPost = function (event) {
        event.preventDefault()

        const img = event.target.img.value
        const msg = event.target.msg.value
        if (!postToList(context.userLoggedId, msg, img)) alert('Error: No se ha podido crear Post')
        props.onExitModal()
    }

    return <div className="home-modal-newpost basic-modal">
        <form className="home-modal-newpost-form basic-form" action="submit" onSubmit={handleOnSubmitPost}>
            <h4>Nuevo Post</h4>

            <label className="basic-label" htmlFor="img">Imagen url</label>
            <input type="url" id="img"></input>

            <label className="basic-label" htmlFor="msg">Mensaje</label>
            <input type="text" id="msg"></input>

            <div className="flex-hor">
                <button type="submit" className="newpost-button basic-button">Nuevo</button>
                <button type="button" className="newpost-button-cancel basic-button" onClick={handleOnExit}>Salir</button>
            </div>
        </form>
    </div>
}