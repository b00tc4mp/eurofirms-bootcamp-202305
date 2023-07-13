function PostEdit(props) {

    const post = postRetrieve(props.idPost)

    const handleOnExitModal = () => props.onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()
        const image = event.target.image.value
        const text = event.target.text.value
        
        if (!updatePost(context.userLoggedIn, post.id, image, text)) alert ('Error: No se pudo actualizar Post')
        props.onExitModal()
    }

    return <div className="home-modal-editpost basic-modal">
        <form className="home-modal-editpost-form basic-form" action="submit" onSubmit={handleUpdatePost}>
            <h4>Editar Post</h4>

            <label className="basic-label" htmlFor="image">Imagen url</label>
            <input type="url" id="image" defaultValue={post.image}></input>

            <label className="basic-label" htmlFor="text">Mensaje</label>
            <input type="text" id="text" defaultValue={post.text}></input>

            <div className="flex-hor">
                <button type="submit" className="editpost-button basic-button">Guardar</button>
                <button type="button" className="editpost-button-cancel basic-button" onClick={handleOnExitModal}>Cancelar</button>
            </div>
        </form>
    </div>
}