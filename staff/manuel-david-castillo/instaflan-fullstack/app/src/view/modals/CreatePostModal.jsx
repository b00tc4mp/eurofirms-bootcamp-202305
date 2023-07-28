import { createNewPost } from "../../logic/createNewPost";
import { context } from "../../logic/helpers/context"

export function CreatePostModal(props) {
    const handleSubmitPost = (event) => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            createNewPost(context.token, image, text)
                .then(() => {
                    props.onCreatePost()
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelCreatePost = () => props.onHideCreatePost()

    return <div className="modal-new-post">
        <form onSubmit={handleSubmitPost} className="form-new-post" action="">
            <h3 className="h3-new-post">New post</h3>
            <p className="p-form">Text</p>
            <textarea
                id="text"
                name=""
                cols="25"
                rows="5"
            ></textarea>
            <p className="p-form">Image</p>
            <input id="image" type="url" />
            <div className="buttons-create-cancel">
                <button type="submit" className="button button-modal">
                    Create
                </button>
                <button onClick={handleCancelCreatePost} type="button" className="button button-modal">
                    Cancel
                </button>
            </div>
        </form>
    </div>
}