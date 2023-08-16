import { useState, useEffect } from "react"
import context from '../../context'
import retrieveMeetup from '../../logic/retrieveMeetup'
import updateMeetup from '../../logic/updateMeetup'

function EditMeetupModal({meetupId, onEditMeetupCancelled, onMeetupEdited}) { 
    console.log('EditMeetupModal -> render')

    
    const [meetup, setMeetup] = useState(null)
    
    //al crear el componente llama a esta función 
    useEffect(() =>{
        try{
            retrieveMeetup(context.token, meetupId)
            .then(meetup => setMeetup(meetup))
            .catch(error => alert(error.message))        
        }catch(error){
              alert(error.message)
        }    
    }, [])

    const handleCancelClick = () => onEditMeetupCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const video = event.target.video.value
        const text = event.target.text.value
        const type = event.target.type.value
        const adress = event.target.adress.value
        const dateMeetup = event.target.dateMeetup.value

        try{
            updateMeetup(context.token, meetupId, image, video, text, type, adress, dateMeetup)
            .then(() =>  onMeetupEdited())
            .catch(error=> error.message)
        }catch(error){
            alert(error.message)
      }    
    }

    return <div className="home-create-meetup-modal">
        <div className="home-create-meetup-container">
            <h2>Edit meetup</h2>
 
            {meetup && <form className="home-delete-meetup-form" onSubmit={handleSubmit}>
            <label htmlFor="image">Image</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="image" type="url" defaultValue={meetup.image}></input>

                <label htmlFor="video">Video</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="video" type="url" defaultValue={meetup.video}></textarea>

                <label htmlFor="text">Description</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="text" type="text" defaultValue={meetup.text}></textarea>

                <label htmlFor="type">Type</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="type" type="text" defaultValue={meetup.type}></textarea>

                <label htmlFor="adress">Adress</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="adress" type="text" defaultValue={meetup.adress}></textarea>

                <label htmlFor="adress">Date meetup</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="adress" type="date" defaultValue={meetup.dateMeetup}/>

                <button className="button" type="submit">Save</button>
                <button className="button" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>}
        </div>
    </div>
}
export default EditMeetupModal