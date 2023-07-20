import { useState, useEffect } from 'react'
import { retrievePost, updatePost} from '../../logic/post-ctrl'
import context from '../../context'

export function PostEdit({ onUpdatedPost, onExitModal, idPost }) {
    const [post, setPost] = useState(null)

    useEffect(() => {
        try {
            retrievePost(context.tokenUser, idPost)
                .then(postRet => { setPost(postRet) })
                .catch(error => { alert('Error: ' + error.message) })
        } catch (error) { alert('Error: ' + error.message) }
    }, [])

    const handleOnExitModal = () => onExitModal()
    const handleUpdatePost = (event) => {
        event.preventDefault()
        const image = event.target.image.value
        const text = event.target.text.value

        try {
            updatePost(context.tokenUser, idPost, image, text)
                .then(() => onUpdatedPost())
                .catch(error => { alert('Error: ' + error.message) })
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <>
        {post && <div className="home-modal-editpost basic-modal">
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
        </div>}
    </>
}