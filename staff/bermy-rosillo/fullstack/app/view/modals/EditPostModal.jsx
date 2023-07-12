function EditPostModal(props){
    const post = retrievePost(props.postId)

    const handleCancelEditPostModal =()=> props.onEditPostCancelled()

    const handleEditPost =event=>{
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value
    
        const result=updatePost(post.id,image,text)
    
        if(!result){
            alert('You cannot edit a post ')
            return
        }
        props.onEditPost()
    }

    return <div className="home-edit-post-modal">
    <div className="home-edit-post-container">
        <h2>Edit post</h2>

        <form className="home-edit-post-form" onSubmit={handleEditPost}>
            <label htmlFor="image">Image</label>
            <input id="image" type="url" defaultValue={post.image}></input>

            <label htmlFor="text">Text</label>
            <textarea id="text" defaultValue={post.text}></textarea>

            <button type="submit">Save</button>
            <button onClick={handleCancelEditPostModal} className="home-edit-post-cancel-button">Cancel</button>
        </form>
    </div>
</div>
}