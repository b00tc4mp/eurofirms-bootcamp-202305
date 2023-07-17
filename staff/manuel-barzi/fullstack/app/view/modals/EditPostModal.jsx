function EditPostModal({ postId, onEditPostCancelled, onPostEdited }) {
    console.log('EditPostModal -> render')

    const postState = React.useState(null)
    const post = postState[0]
    const setPost = postState[1]

    React.useEffect(() => {
        try {
            retrievePost(context.token, postId)
                .then(post => setPost(post))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleCancelClick = () => onEditPostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            updatePost(context.token, postId, image, text)
                .then(() => onPostEdited())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-edit-post-modal">
        <div className="home-edit-post-container">
            <h2>Edit post</h2>

            {post && <form className="home-edit-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" defaultValue={post.image}></input>

                <label htmlFor="text">Text</label>
                <textarea id="text" defaultValue={post.text}></textarea>

                <button type="submit">Save</button>
                <button type="button" className="home-edit-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>}
        </div>
    </div>
}