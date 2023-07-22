import { createPost } from '../../logic/post-ctrl'
import context from '../../context'

export function PostCreate({ onCreatedPost, onExitModal }) {

    const handleOnExit = () => onExitModal()
    const handleOnSubmitPost = function (event) {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            createPost(context.tokenUser, image, text)
                .then(() => onCreatedPost())
                .catch(error => { alert('Error: ' + error.message) })
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <div className="home-modal-newpost basic-modal">
        <form className="home-modal-newpost-form basic-form" action="submit" onSubmit={handleOnSubmitPost}>
            <h4>Nuevo Post</h4>

            <label className="basic-label" htmlFor="image">Imagen url</label>
            <input type="url" id="image"></input>

            <label className="basic-label" htmlFor="text">Mensaje</label>
            <input type="text" id="text"></input>

            <div className="flex-hor">
                <button type="submit" className="newpost-button basic-button">Nuevo</button>
                <button type="button" className="newpost-button-cancel basic-button" onClick={handleOnExit}>Salir</button>
            </div>
        </form>
    </div>
}
