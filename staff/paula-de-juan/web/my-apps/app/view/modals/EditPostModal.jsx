function EditPostModal(props){
  console.log('Edit Modal -> render')

    const post = retrievePost(props.postId)

    const handleCancelClick = () => props.onEditPostCancelled()
    
    const handleSubmit = event =>{
        event.preventDefault()

        const image = event.target['edit-post-url'].value
        const text = event.target['edit-post-text'].value

        const result = updatePost(props.postId, image, text)

        if (!result){
            alert('Can\'t edit post')
            return
        }
        props.onPostEdited()
    }

   return <div className="home-edit-post-modal">
    <div className="home-edit-post-container">
      <h2>Edit post</h2>
      <form className="home-edit-post-form" onSubmit={handleSubmit}>
        <input type="hidden" id="edit-post-id" />

        <label htmlFor="edit-post-url">Image</label>
        <input id="edit-post-url" type="url" />

        <label htmlFor="edit-post-text">Text</label>
        <textarea id="edit-post-text"></textarea>

        <button type="submit">Save changes</button>
        <button className="home-edit-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </div>
  </div>
}