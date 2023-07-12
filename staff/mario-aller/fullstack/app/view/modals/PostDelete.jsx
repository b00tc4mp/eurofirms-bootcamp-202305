function PostDelete(props) {

    const handleOnExitModal = () => props.onExitModal()
    const handleDeletePost = () => {

        try {
            deletePost(context.userLoggedId, props.idPost)
                .then(() => props.onExitModal())
                .catch(err => { alert('Error: ' + err.error) })
        } catch (err) { alert('Error: ' + err.message) }

        // if (!deletePost(context.userLoggedId, props.idPost)) alert ('Error: No se pudo borrar Post')
        // props.onExitModal()
    }

    return <div className="home-modal-deletepost basic-modal">
        <form className="home-modal-deletepost-form basic-form" action="submit">
            <h4>Borrar Post</h4>

            <div className="flex-hor">
                <button type="button" className="deletepost-button basic-button" onClick={handleDeletePost}>Borrar</button>
                <button type="button" className="deletepost-button-cancel basic-button" onClick={handleOnExitModal}>Cancelar</button>
            </div>
        </form>
    </div>
}