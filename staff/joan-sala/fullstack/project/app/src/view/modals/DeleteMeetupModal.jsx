import context from '../../context'
import deleteMeetup from '../../logic/deleteMeetup'

function DeleteMeetupModal({meetupId, onMeetupDeleted, onDeleteMeetupCancelled}) {
    console.log('DeleteMeetupModal -> render')

    const handleCancelClick = () => onDeleteMeetupCancelled()

    const handleSubmit = event => {
        event.preventDefault()
        
        try{
            deleteMeetup(context.token, meetupId)
            .then(()=> onMeetupDeleted())
            .catch(error=> alert(error.message))
        }catch(error){
                alert(error.message)
        }
    }

    return <div className="bg-[#2C2A2A] bg-opacity-90 fixed w-full h-full top-0 flex items-center justify-center">
    <div className="bg-white opacity-100 pt-10">
        <h2 className="bg-[#2C2A2A] text-white py-6 text-center">Delete meetup</h2>        
            <form className="bg-white px-20 pt-10" onSubmit={handleSubmit} 
            >
                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full my-2 hover:bg-[#707070]" type="submit">Delete</button>
                <button className="bg-[#2C2A2A] text-white px-4 py-2 text-sm text-center rounded-full shadow-sm hover:bg-[#707070]" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}
export default DeleteMeetupModal