import { deletePost } from './../../logic/deletePost'
import context from '../../context'

export function DeletePostModal(props) {
    const handleSubmitPost = (event) => {
        event.preventDefault()

        try {
            deletePost(context.token, props.postId)
                .then(() => {
                    props.onDeletePost()
                })
                .catch(error => {
                    alert(error.message)
                    props.onHideDeletePost()
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelDeletePost = () => props.onHideDeletePost()

    return <div className="modal-delete-post">
        <form onSubmit={handleSubmitPost} className="form-delete-post" action="">
            <input type="hidden" id="delete-post-id" />
            <h3 className="h3-delete-post">Delete post</h3>
            <p className='p-form'>Are you sure to delete this post?</p>
            <div className="buttons-create-cancel">
                <button type="submit" className="button button-modal">
                    Delete
                </button>
                <button onClick={handleCancelDeletePost} type="button" className="button button-modal">
                    Cancel
                </button>
            </div>
        </form>
    </div>
}