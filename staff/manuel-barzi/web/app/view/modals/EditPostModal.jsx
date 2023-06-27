function EditPostModal(props) {
    console.log('EditPostModal -> render')

    const post = retrievePost(props.postId)

    const handleCancelClick = () => props.onEditPostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        const result = updatePost(props.postId, image, text)

        if (!result) {
            alert('Could not edit post')

            return
        }

        props.onPostEdited()
    }

    return <div className="home-edit-post-modal">
        <div className="home-edit-post-container">
            <h2>Edit post</h2>

            <form className="home-edit-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" defaultValue={post.image}></input>

                <label htmlFor="text">Text</label>
                <textarea id="text" defaultValue={post.text}></textarea>

                <button type="submit">Save</button>
                <button type="button" className="home-edit-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}