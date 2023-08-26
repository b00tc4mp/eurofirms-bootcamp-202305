import context from "../../context"
import createArtwork from "../../logic/createArtwork"

function CreateArtworkModal(props) {
    console.log('CreateArtworkModal -> render')
  
    const artwork = {}

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const description = event.target.description.value
        const materials = event.target.materials.value 
        const ornaments = event.target.ornaments.value.split(',').map ((ornament) => ornament.trim())
        
        try { 
            createArtwork(context.token, image, description, materials, ornaments)
                .then(() => props.onArtworkCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelClick = () => props.onCreateArtworkCancelled()

    return <div className="home-create-artwork-modal" >
        <div className="home-create-artwork-container">
            <h2>Create artwork</h2>

            <form className="home-create-artwork-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url"></input>

                <label htmlFor="description">Description</label>
                <textarea className="home-create-artwork-form-description" id="description"></textarea>

                <label htmlFor="materials">Materials</label>
                <input id="materials"></input>

                <label htmlFor="ornaments">Ornaments</label>
                <input id="ornaments"></input> 
                
                <button type="submit">Create</button>
                <button className="home-create-artwork-cancel-button"onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div >
}
export default CreateArtworkModal


