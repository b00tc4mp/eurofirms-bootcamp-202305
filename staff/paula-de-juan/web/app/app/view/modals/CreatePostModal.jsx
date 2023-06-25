function CreatePostModal(props){
    console.log('CreatePost Modal -> render')

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target['create-post-url'].value
        const text = event.target['create-post-text'].value

        const result = createPost(context.userId, image, text)

        if(!result){
            alert('Can\'t create post')
            return
        }
        props.onPostCreated()
    }

    const handleCancelClick = () => props.onCreatePostCancelled()

    return <div className="home-create-post-modal">
    <div className="home-create-post-container">
        <h2>Create post</h2>
        <form className="home-create-post-form" onSubmit={handleSubmit}>
            <label htmlFor="create-post-url">Image</label>
            <input id="create-post-url" type="url" />

            <label htmlFor="create-post-text">Text</label>
            <textarea id="create-post-text"></textarea>

            <button type="submit">Create</button>
            <button className="home-create-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
        </form>
    </div>
</div>
}