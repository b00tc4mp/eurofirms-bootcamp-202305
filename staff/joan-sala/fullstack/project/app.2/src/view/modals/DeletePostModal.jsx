import context from '../../context'
import deletePost from '../../logic/deletePost'

function DeletePostModal(props) {
    console.log('DeletePostModal -> render')

    const handleCancelClick = () => props.onDeletePostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

       try{
            deletePost(context.token, props.postId)
            .then(()=> props.onPostDeleted())
            .catch(error=> alert(error.message))
       }catch(error){
            alert(error.message)
       }
    }

    return <div className="home-delete-post-modal">
        <div className="home-delete-post-container">
            <h2>Delete post</h2>

            <form className="home-delete-post-form" onSubmit={handleSubmit}>
                <button type="submit">Delete</button>
                <button type="button" className="home-delete-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}
export default DeletePostModal