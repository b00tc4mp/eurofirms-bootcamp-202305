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
        const dateMeetup = event.target.dateMeetup.value

        try{
            createMeetup(context.token, image, text, type, adress, dateMeetup, video)
            .then(()=> props.onMeetupCreated())
            .catch(error => alert(error.message))
        }catch(error){
            alert(error.message)
        }
    }
    
    const handleCancelClick = () => props.onCreateMeetupCancelled()

    return <div className="bg-[rgba(0, 0, 0, 0.497)] fixed w-full h-full top-0 flex items-center justify-center">
        <div className="bg-white px-20 pt-10">
            <h2 className="bg-[#2C2A2A] text-white py-6 text-center ">Create meetup</h2>

            <form className="" onSubmit={handleSubmit} //flex flex-col items-center justify-center gap-7
            >
                <label className="mt-6" htmlFor="image">Image</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="image" type="url"></input>

                <label htmlFor="video">Video</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="video" type="url"></textarea>

                <label htmlFor="text">Description</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="text" type="text"></textarea>
                
                <label htmlFor="type">Type</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="type" type="text"></textarea>

                <label htmlFor="adress">Adress</label>
                <textarea className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="adress" type="text"></textarea>

                <label htmlFor="dateMeetup">Date meetup</label>
                <input className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#d9d9d9] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#494949] dark:focus:ring-blue-500 dark:focus:border-blue-500" id="dateMeetup" type="date" />
                
                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full my-3 hover:bg-[#707070]" type="submit">Create</button>
                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full my-3 hover:bg-[#707070]" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}
export default CreateMeetupModal