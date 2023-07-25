function DeletePostModal(props){
    console.log('DeleteModal -> render')

    const handleCancelClick = () => props.onDeletePostCancelled()

    const handleDeleteClick = () => {
        try {
            deletePost(context.userId, props.postId)
            .then (()=> props.onPostDeleted())
            .catch (error => alert(error.message))
        } catch(error){
            alert(error.message)
        }

    }

    return <div className="home-delete-post-modal">
    <div className="home-delete-post-container">
        <h2>Delete post</h2>
                <button onClick={handleDeleteClick}>Delete</button>
                <button className="home-delete-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
    </div>
</div>
}