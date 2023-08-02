import { useState, useEffect } from 'react'
import retrievePost from './../../logic/retrievePost'
import editPost from './../../logic/editPost'
import context from '../../context'

export default function EditPostModal(props) {
    const [post, setPost] = useState(null)

    useEffect(() => {
        try {
            retrievePost(context.token, props.postId)
                .then((post) => setPost(post))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleSubmitPost = (event) => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            editPost(context.token, props.postId, image, text)
                .then(() => {
                    props.onEditPost()
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelEditPost = () => props.onHideEditPost()

    return <div className="modal-edit-post">
        {post && <form onSubmit={handleSubmitPost} className="form-edit-post" action="">
            <input type="hidden" id="edit-post-id" />
            <h3 className="h3-edit-post">Edit post</h3>
            <p className="p-form">Image</p>
            <input id="image" type="url" defaultValue={post.image ? post.image : undefined} />
            <p className="p-form">Text</p>
            <textarea
                id="text"
                name=""
                cols="25"
                rows="5"
                defaultValue={post.text ? post.text : undefined}
            ></textarea>
            <div className="buttons-create-cancel">
                <button type="submit" className="button button-modal">
                    Edit
                </button>
                <button onClick={handleCancelEditPost} type="button" className="button button-modal">
                    Cancel
                </button>
            </div>
        </form>}
    </div>
}