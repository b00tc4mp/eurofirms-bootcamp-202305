import context from "../../context"
import createArtwork from "../../logic/createArtwork"


function CreateArtworkModal(props) {
    console.log('CreateArtworkModal -> render')
   
    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const description = event.target.description.value
        const material = event.target.material.value 
        const ornaments = event.target.ornaments.value 
        try { 
            createArtwork(context.token, image, description, material, ornaments)
                .then(() => props.onCreated())
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
                <textarea id="description"></textarea>

                <button type="submit">Create</button>
                <button className="home-create-artwork-cancel-button"onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    </div >
}
export default CreateArtworkModal


