function CreatePostModal(props){
    console.log('CreatePostModal -> renderr')

    const handleSubmit = event => {
        event.preventDefault()

        // Allows you to get to that component.
        const image = event.target.image.value
        const text = event.target.text.value

        const result = createPost(context.userId, image, text)

        if (!result) {
            alert('Could not create post')

            return
        }
        // To notify Home that a post has been created
        props.onPostCreated()
    }
    
    const handleCancelClick = () => props.onCreatePostCancelled()

    return <div className="home-create-post-modal">
        <div className="home-create-post-container">
            <h2>Create post</h2>

            <form className="home-create-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url"></input>

                <label htmlFor="text">Text</label>
                <textarea id="text"></textarea>

                <button type="submit">Create</button>
                <button type="button" className="home-create-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}