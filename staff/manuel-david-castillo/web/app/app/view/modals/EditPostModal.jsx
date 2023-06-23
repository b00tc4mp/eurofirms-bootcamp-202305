function EditPostModal(props) {
    const post = retrievePost(props.postId)

    const handleSubmitPost = (event) => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        const result = updatePost(props.postId, image, text)

        if(result === false) {
            alert('could not edit post')

            return
        }
    
        props.onHideEditPost()
    }

    const handleCancelEditPost = () => props.onHideEditPost()

    return <div className="container-edit-post">
    <form onSubmit={handleSubmitPost} className="form-edit-post" action="">
      <input type="hidden" id="edit-post-id" />
      <h3 className="h3-edit-post">Edit post</h3>
      <p className="p-form">Image</p>
      <input id="image" type="url" defaultValue={post.image}/>
      <p className="p-form">Text</p>
      <textarea
        id="text"
        name=""
        cols="25"
        rows="5"
        defaultValue={post.text}
      ></textarea>
      <div className="buttons-create-cancel">
        <button type="submit" className="button-create-edit-post">
          Edit
        </button>
        <button onClick={handleCancelEditPost} type="button" className="button-cancel-edit-post">
          Cancel
        </button>
      </div>
    </form>
  </div>
}

