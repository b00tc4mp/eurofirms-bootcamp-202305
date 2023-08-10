import context from '../../context'
import createMeetup from '../../logic/createMeetup'

function CreateMeetupModal(props){
    console.log('CreateMeetupModal -> render')

    const handleSubmit = event => {
        event.preventDefault()

        // Allows you to get to that component.
        const image = event.target.image.value
        const video = event.target.video.value
        const text = event.target.text.value
        const type = event.target.type.value
        const adress = event.target.adress.value
        //const dateMeetup = event.target.dateMeetup.value

        try{
            createMeetup(context.token, image, video, text, type, adress)
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
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="image" type="url"></input>

                <label htmlFor="video">Video</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="video" type="url"></textarea>

                <label htmlFor="text">Description</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="text" type="text"></textarea>
                
                <label htmlFor="type">Type</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="type" type="text"></textarea>

                <label htmlFor="adress">Adress</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="adress" type="text"></textarea>
                
                <button className="button" type="submit">Create</button>
                <button className="button" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}
export default CreateMeetupModal