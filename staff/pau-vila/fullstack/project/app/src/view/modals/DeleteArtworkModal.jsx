import context from "../../context"
import deleteArtwork from "../../logic/deleteArtwork"

function DeleteArtworkModal({ artworkId, onArtworkDeleted, onDeleteArtworkCancelled}) {
    console.log('DeleteArtworkModal -> render')

    const handleCancelClick = () => onDeleteArtworkCancelled()

    const handleSubmit = event => {
        event.preventDefault()

       try {
        deleteArtwork(context.token, artworkId)
        .then(() => onArtworkDeleted())
        .catch(error => alert(error.message))
       } catch (error) {
        alert(error.message)
       }
    }

    return <div className="home-delete-artwork-modal">
        <div className="home-delete-artwork-container">
            <h2>Delete artwork</h2>

            <form className="home-delete-artwork-form" onSubmit={handleSubmit}>
                <button type="submit">Delete</button>
                <button type="buttom" className="home-delete-artwork-cancel-button"onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div>
}
export default DeleteArtworkModal