function DeletePostModal(props){
    console.log('DeleteModal -> render')

    const handleCancelClick = () => props.onDeletePostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const result = deletePost(props.postId)

        if(!result){
            alert('Can\'t delete post')
            
            return
      
        }
        props.onPostDeleted()

    }

    return <div className="home-delete-post-modal">
    <div className="home-delete-post-container">
        <h2>Delete post</h2>
        <form className="home-delete-post-form" onSubmit={handleSubmit}>

            <input type="hidden" id="delete-post-id" />

                <button type="submit">Delete</button>
                <button className="home-delete-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
        </form>
    </div>
</div>
}