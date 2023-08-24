import { deletePost } from './../../logic/deletePost'
import { context } from '../../logic/helpers/context'

export function DeletePostModal(props) {
  const handleSubmitPost = (event) => {
    event.preventDefault()

    try {
      deletePost(context.token, props.postId)
        .then(() => {
          props.onDeletePost()
        })
        .catch(error => {
          alert(error.message)
          props.onHideDeletePost()
        })
    } catch (error) {
      alert(error.message)
    }

    /* const result =  deletePost(props.postId)
    if (result === false) {
     alert("post could not deltete")
    } else {
     props.onHideDeletePost()
    } */
  }

  const handleCancelDeletePost = () => props.onHideDeletePost()

  return <div className="container-delete-post">
    <form onSubmit={handleSubmitPost} className="form-delete-post" action="">
      <input type="hidden" id="delete-post-id" />
      <h3 className="h3-delete-post">Delete post</h3>
      <p>Are you sure to delete this post?</p>
      <div className="buttons-create-cancel">
        <button type="submit" className="button-create-delete-post">
          Delete
        </button>
        <button onClick={handleCancelDeletePost} type="button" className="button-cancel-delete-post">
          Cancel
        </button>
      </div>
    </form>
  </div>
}

