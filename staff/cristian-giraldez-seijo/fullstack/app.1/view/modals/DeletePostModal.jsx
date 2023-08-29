/**
 * The DeletePostModal component is a React component that renders a modal for deleting a post, with a
 * form that allows the user to confirm the deletion or cancel it.
 * @returns The DeletePostModal component is returning a JSX element.
 */
function DeletePostModal({ postId, onPostDeleted, onDeletePostCancelled }) {
    console.log('DeletePostModal -> render')

    const handleCancelClick = () => onDeletePostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        try {

            deletePost(context.userId, postId)
            .then(() => onPostDeleted())
            .catch(error => alert(error.message))
        } catch(error) {alert(error.message)}
    }

    return <div className="home-delete-post-modal">
        <div className="home-delete-post-container">
            <h2>Delete post</h2>

            <form className="home-delete-post-form" onSubmit={handleSubmit}>

                <button type="submit">Delete</button>
                <button type="button" className="home-delete-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}