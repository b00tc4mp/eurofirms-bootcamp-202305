import { useState, useEffect } from "react"
import context from '../../context'
import retrievePost from '../../logic/retrievePost'
import updatePost from '../../logic/updatePost'

function EditPostModal({postId, onEditPostCancelled, onPostEdited}){
    console.log('Edit Modal -> render')

    const postState = useState(null)
    const post = postState[0]
    const setPost = postState[1]

    useEffect(() => {
        try{
            retrievePost(context.userId, postId)
                .then(post => setPost(post))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleCancelClick = () => onEditPostCancelled()
    
    const handleSubmit = event =>{
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

       try {
            updatePost(context.userId, postId, image, text)
                .then(() => onPostEdited())
                .catch(error => alert(error.message))
       }catch (error) {
        alert(error.message)
       }
    }
    
    return <div className="home-edit-post-modal">
    <div className="home-edit-post-container">
        <h2>Edit post</h2>
    {post && <form className="home-edit-post-form" onSubmit={handleSubmit}>
           
                <label htmlFor="image">Image</label>
                <input id="image" type="url" defaultValue={post.image}/>

                <label htmlFor="text">Text</label>
                <textarea id="text" defaultValue={post.text}></textarea>

                <button type="submit">Save changes</button>
                <button className="home-edit-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
        </form>}
    </div>
</div>
}
export default EditPostModal