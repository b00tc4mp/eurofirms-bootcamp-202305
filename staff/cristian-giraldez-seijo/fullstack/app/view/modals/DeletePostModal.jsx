function DeletePostModal(props) {
    console.log('DeletePostModal -> render')

    const handleCancelClick = () => props.onDeletePostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const result = deletePost(props.postId)

        if (!result) {
            alert('Could not delete post')

            return
        }

        props.onPostDeleted()
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