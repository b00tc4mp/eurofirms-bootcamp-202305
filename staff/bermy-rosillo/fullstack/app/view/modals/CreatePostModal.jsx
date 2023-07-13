function CreatePostModal(props) {
    const handleCancelCreatePostModal = () => props.onCreatePostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value
        try {
            createPost(context.userId, image, text)
                .then(() => {
                    props.onCreatePost() //return to home
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }

    }


    return <div className="home-create-post-modal">
        <div className="home-create-post-container">
            <h2>Create post</h2>

            <form className="home-create-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url"></input>

                <label htmlFor="text">Text</label>
                <textarea id="text"></textarea>

                <button type="submit">Create</button>
                <button onClick={handleCancelCreatePostModal} className="home-create-post-cancel-button">Cancel</button>
            </form>
        </div>
    </div>
}