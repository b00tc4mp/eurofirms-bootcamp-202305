import context from '../../context'
import deletePost from '../../logic/deletePost'

function DeletePostModal({ postId, onPostDeleted, onDeletePostCancelled }){
    console.log('DeleteModal -> render')

    const handleCancelClick = () => onDeletePostCancelled()

    const handleSubmit = event => {
            event.preventDefault()
        try {
            deletePost(context.token, postId)
            .then (()=> onPostDeleted())
            .catch (error => alert(error.message))
        } catch(error){
            alert(error.message)
        }
    }

    return <div className="home-delete-post-modal">
    <div className="home-delete-post-container">
        <h2>Delete post</h2>
                <button onClick={handleSubmit}>Delete</button>
                <button className="home-delete-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
    </div>
</div>
}
export default DeletePostModal