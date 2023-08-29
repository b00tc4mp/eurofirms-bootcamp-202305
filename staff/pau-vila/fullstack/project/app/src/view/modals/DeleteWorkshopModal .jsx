import context from "../../context"
import deleteWorkshop from "../../logic/deleteWorkshop"

function DeleteWorkshopModal({ workshopId, onWorkshopDeleted, onDeleteWorkshopCancelled}) {
    console.log('DeleteWorkshopModal -> render')

    const handleCancelClick = () => onDeleteWorkshopCancelled()

    const handleSubmit = event => {
        event.preventDefault()

       try {
        deleteWorkshop(context.token, workshopId)
        .then(() => onWorkshopDeleted())
        .catch(error => alert(error.message))
       } catch (error) {
        alert(error.message)
       }
    }

    return <div className="home-delete-workshop-modal">
        <div className="home-delete-workshop-container">
            <h2>Delete workshop</h2>

            <form className="home-delete-workshop-form" onSubmit={handleSubmit}>
                <button type="submit">Delete</button>
                <button type="buttom" className="home-delete-workshop-cancel-button"onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}
export default DeleteWorkshopModal