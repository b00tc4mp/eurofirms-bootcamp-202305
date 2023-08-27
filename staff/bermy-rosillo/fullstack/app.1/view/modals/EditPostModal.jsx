function EditPostModal(props){
    const [post, setPost] = React.useState(null)

    React.useEffect(() => {
        try {
            retrievePost(context.token, props.postId)
                .then(post => setPost(post))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleCancelEditPostModal =()=> props.onEditPostCancelled()

    const handleEditPost =event=>{
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value
    
        try {
            updatePost(context.token, props.postId, image, text)
                .then(() => {
                    props.onEditPost() //return to home
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-edit-post-modal">
    {post && <div className="home-edit-post-container">
        <h2>Edit post</h2>

        <form className="home-edit-post-form" onSubmit={handleEditPost}>
            <label htmlFor="image">Image</label>
            <input id="image" type="url" defaultValue={post.image}></input>

            <label htmlFor="text">Text</label>
            <textarea id="text" defaultValue={post.text}></textarea>

            <button type="submit">Save</button>
            <button onClick={handleCancelEditPostModal} className="home-edit-post-cancel-button">Cancel</button>
        </form>
    </div>}
</div>
}