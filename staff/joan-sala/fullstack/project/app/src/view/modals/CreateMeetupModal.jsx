import context from '../../context'
import createMeetup from '../../logic/createMeetup'

function CreateMeetupModal(props){
    console.log('CreateMeetupModal -> render')

    const handleSubmit = event => {
        event.preventDefault()

        // Allows you to get to that component.
        const image = event.target.image.value
        const text = event.target.text.value

        try{           //variable global
            createMeetup(context.token, image, text)
            .then(()=> props.onMeetupCreated())
            .catch(error => alert(error.message))
        }catch(error){
            alert(error.message)
        }
    }
    
    const handleCancelClick = () => props.onCreateMeetupCancelled()

    return <div className="home-create-meetup-modal">
        <div className="home-create-meetup-container">
            <h2>Create meetup</h2>

            <form className="home-create-meetup-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url"></input>

                <label htmlFor="text">Text</label>
                <textarea id="text"></textarea>

                <button type="submit">Create</button>
                <button type="button" className="home-create-meetup-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}
export default CreateMeetupModal