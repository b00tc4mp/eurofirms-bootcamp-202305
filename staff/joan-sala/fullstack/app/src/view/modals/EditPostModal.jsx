import { useState, useEffect } from "react"
import context from '../../context'
import retrievePost from '../../logic/retrievePost'
import updatePost from '../../logic/updatePost'

function EditPostModal({postId, onEditPostCancelled, onPostEdited}) { //Sacado del Home - linia 111  
    console.log('EditPostModal -> render')

    //const postState = useState(null) //inicialmente el post es nuulo
    //const post = postState[0] //posición actual   
    //const setPost = postState[1] //seter del estado
    const [post, setPost] = useState(null)
    
    //al crear el componente llama a esta función 
    useEffect(() =>{
        try{
            retrievePost(context.token, postId)
            .then(post => setPost(post))
            .catch(error => alert(error.message))        
        }catch(error){
              alert(error.message)
        }    
    }, []) //sólo una vez

    const handleCancelClick = () => onEditPostCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value
        
        try{
            updatePost(context.token, postId, image, text)
            .then(() =>  onPostEdited())
            .catch(error=> error.message)
        }catch(error){
            alert(error.message)
      }    
    }

    return <div className="home-edit-post-modal">
        <div className="home-edit-post-container">
            <h2>Edit post</h2>
 
            {post && <form className="home-edit-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" defaultValue={post.image}></input>

                <label htmlFor="text">Text</label>
                <textarea id="text" defaultValue={post.text}></textarea>

                <button type="submit">Save</button>
                <button type="button" className="home-edit-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>}
        </div>
    </div>
}
export default EditPostModal