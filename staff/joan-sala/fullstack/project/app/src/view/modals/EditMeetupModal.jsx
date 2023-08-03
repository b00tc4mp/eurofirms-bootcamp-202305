import { useState, useEffect } from "react"
import context from '../../context'
import retrieveMeetup from '../../logic/retrieveMeetup'
import updateMeetup from '../../logic/updateMeetup'

function EditMeetupModal({meetupId, onEditMeetupCancelled, onMeetupEdited}) { //Sacado del Home - linia 111  
    console.log('EditMeetupModal -> render')

    //const postState = useState(null) //inicialmente el post es nuulo
    //const post = postState[0] //posición actual   
    //const setPost = postState[1] //seter del estado
    const [meetup, setPost] = useState(null)
    
    //al crear el componente llama a esta función 
    useEffect(() =>{
        try{
            retrieveMeetup(context.token, meetupId)
            .then(post => setPost(post))
            .catch(error => alert(error.message))        
        }catch(error){
              alert(error.message)
        }    
    }, []) //sólo una vez

    const handleCancelClick = () => onEditMeetupCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value
        
        try{
            updateMeetup(context.token, meetupId, image, text)
            .then(() =>  onMeetupEdited())
            .catch(error=> error.message)
        }catch(error){
            alert(error.message)
      }    
    }

    return <div className="home-edit-meetup-modal">
        <div className="home-edit-meetup-container">
            <h2>Edit meetup</h2>
 
            {post && <form className="home-edit-meetup-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" defaultValue={meetup.image}></input>

                <label htmlFor="text">Text</label>
                <textarea id="text" defaultValue={meetup.text}></textarea>

                <button type="submit">Save</button>
                <button type="button" className="home-edit-post-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>}
        </div>
    </div>
}
export default EditMeetupModal