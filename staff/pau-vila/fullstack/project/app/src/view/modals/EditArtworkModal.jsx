import context from "../../context"
import { useEffect, useState } from "react"
import retrieveArtwork from "../../logic/retrieveArtwork"
import updateArtwork from "../../logic/updateArtwork"

function EditArtworkModal({ artworkId, onEditArtworkCancelled, onArtworkEdited }) {
    console.log('EditArtworkModal -> render')

   const [artwork, setArtwork] = useState(null)

   useEffect(() => {
    try {
        retrieveArtwork(context.token, artworkId)
        .then(artwork => setArtwork(artwork))
        .catch(error => alert(error.message))
    } catch (error) {
        alert(error.message)
    }
   }, [])
    
    const handleCancelClick = () => onEditArtworkCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const description = event.target.description.value

        try{
        updateArtwork(context.token, artworkId, image, description)
        .then(() => onPostEdited())
        .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-edit-artwork-modal">
        <div className="home-edit-artwork-container">
            <h2>Edit artwork</h2>

        {post && <form className="home-edit-artwork-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url"defaultValue={artwork.image}></input>

                <label htmlFor="description">Description</label>
                <textarea id="description" defaultValue={artwork.description}></textarea>

                <button type="submit">Save</button>
                <button type="button"className="home-edit-artwork-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>}
        </div>
    </div>
}
export default EditArtworkModal