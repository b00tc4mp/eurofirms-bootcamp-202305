function PostEdit(props) {

    const post = postRetrieve(props.idPost)

    const handleOnExitModal = () => props.onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()
        const img = event.target.img.value
        const msg = event.target.msg.value
        if (!updatePost(context.userLoggedIn, post.id, msg, img)) alert ('Error: No se pudo actualizar Post')
        props.onExitModal()
    }

    return <div className="home-modal-editpost basic-modal">
        <form className="home-modal-editpost-form basic-form" action="submit" onSubmit={handleUpdatePost}>
            <h4>Editar Post</h4>

            <label className="basic-label" htmlFor="img">Imagen url</label>
            <input type="url" id="img" defaultValue={post.image}></input>

            <label className="basic-label" htmlFor="msg">Mensaje</label>
            <input type="text" id="msg" defaultValue={post.text}></input>

            <div className="flex-hor">
                <button type="submit" className="editpost-button basic-button">Guardar</button>
                <button type="button" className="editpost-button-cancel basic-button" onClick={handleOnExitModal}>Cancelar</button>
            </div>
        </form>
    </div>
}