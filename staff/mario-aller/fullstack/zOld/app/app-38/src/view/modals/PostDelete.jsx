import { deletePost } from '../../logic/post-ctrl'
import context from '../../context'

export function PostDelete({ onDeletedPost, onExitModal, idPost }) {

    const handleOnExitModal = () => onExitModal()
    const handleDeletePost = () => {

        try {
            deletePost(context.tokenUser, idPost)
                .then(() => onDeletedPost())
                .catch(error => { alert('Error: ' + error.message) })
        } catch (error) { alert('Error: ' + error.message) }
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