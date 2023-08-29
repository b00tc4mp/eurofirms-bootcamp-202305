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
        const materials = event.target.materials.value 
        const ornaments = event.target.ornaments.value.split(',').map ((ornament) => ornament.trim())

        try {
            updateArtwork(context.token, artworkId, image, description, materials, ornaments)
                .then(() => onArtworkEdited())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-edit-artwork-modal">
        <div className="home-edit-artwork-container">
            <h2>Edit artwork</h2>

            {artwork && <form className="home-edit-artwork-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" defaultValue={artwork.image}></input>

                <label htmlFor="description">description</label>
                <textarea id="description" defaultValue={artwork.description}></textarea>

                <label htmlFor="materials">Materials</label>
                <input id="materials" defaultValue={artwork.materials}></input>

                <label htmlFor="ornaments">Ornaments</label>
                <input id="ornaments" defaultValue={artwork.ornaments.join(', ')}></input> 
                
                <button type="submit">Save</button>
                <button type="button" className="home-edit-artwork-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>}
        </div>
    </div>
}
export default EditArtworkModal