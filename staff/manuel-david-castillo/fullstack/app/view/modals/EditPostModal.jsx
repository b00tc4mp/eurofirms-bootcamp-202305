function EditPostModal(props) {
  const [post, setPost] = React.useState(null)

  /* El código no entra en este useEffect */
  React.useEffect(() => {
    try {
      retrievePost(context.userId, props.postId)
        .then((post) => setPost(post))
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [])

  const handleSubmitPost = (event) => {
    event.preventDefault()

    const image = event.target.image.value
    const text = event.target.text.value

    try {
      updatePost(context.userId, props.postId, image, text)
        .then(() => {
          props.onUpdatePost()
        })
        .catch(error => {
          alert(error.message)
        })
    } catch (error) {
      alert(error.message)
    }

    /* const result = updatePost(props.postId, image, text)

    if (result === false) {
      alert('could not edit post')

      return
    }

    props.onHideEditPost() */
  }

  const handleCancelEditPost = () => props.onHideEditPost()

  return <div className="container-edit-post">
    <form onSubmit={handleSubmitPost} className="form-edit-post" action="">
      <input type="hidden" id="edit-post-id" />
      <h3 className="h3-edit-post">Edit post</h3>
      <p className="p-form">Image</p>
      <input id="image" type="url" /* defaultValue={post.image ? post.image : undefined} */ />
      <p className="p-form">Text</p>
      <textarea
        id="text"
        name=""
        cols="25"
        rows="5"
      /* defaultValue={post.text ? post.text : undefined} */
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

